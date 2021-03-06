import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage'; 

////autentificación usando Firebase////

const firebaseConfig = {
  apiKey: "AIzaSyDyvBPeeZs28YLZDwqagRygQYEnLYZU6B8",
  authDomain: "qatar-app-3478a.firebaseapp.com",
  authDomain:"mail-demo-fcm.firebaseapp.com",
  projectId: "qatar-app-3478a",
  storageBucket: "qatar-app-3478a.appspot.com",
  messagingSenderId: "551734793641",
  appId: "1:551734793641:web:eb9262db869372531320b8",
  measurementId: "G-SFB937H387",
};

firebase.apps.length === 0 && firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); // parte de base de datos

//extraigo la información que onsido del loging del usuario 

const mapUser = (user) => {

  if (user) {
    const { _delegate } = user;
    const { displayName, uid, photoURL, email, id } = _delegate;
   
    return {
      userName: displayName,
      userId: uid,
      avatar: photoURL,
      email: email,
      id:id
    };
  } else {
    return null;
  }
};

export const isAuthentificationChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUser(user);
    
    onChange(normalizeUser);
  });
};

export const logingWithFacebook = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(googleProvider)

    .then((user) => {
      const { additionalUserInfo } = user;
      const { profile } = additionalUserInfo;
      const { name, id, picture } = profile;
     
      return {
        userName: name,
        userId: id,
        avatar: picture,
      };
    })

    .catch((error) => {
      console.log(error);
    });
};

//// Base de datos Firebase Firestore ////

// kind of firebase: [
//                      {collection : [
//                                     {document:[
//                                                {data}
//                                      ]}
//                          ]},
//                     ]

//ADD//
export const addComments = ({ content, userName, avatar, userId , img }) => {
  return db.collection("comments").add({
    //todos perteneces a un doc que esta dentro de la collection comments
    content,
    userName,
    avatar,
    userId,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likeCount: 0,
    sharedCount: 0,
    img

  });
};

const mapCommitFromFirebaseToCommitObject = (doc) =>{
  const docData = doc.data();
  const id = doc.id;
  const { createdAt } = docData;

  return {
    ...docData,
    createdAt: +createdAt.toDate(),
    id,
  };

}


// LISTEN //

export const listenLastComment = (callbackHamdleNewComment) =>{
  return db
  .collection("comments") // creo la collection de firestore
    .orderBy("createdAt", "desc") // primero poner el campo a considerar y luego ascendente o descendente (para acomodar los tweets)
    .limit(10)
    .onSnapshot(({docs})=> {
      const newComments =docs.map(mapCommitFromFirebaseToCommitObject)
      callbackHamdleNewComment(newComments)
    }     
    ) }
  



//READ//

// export const fetchLastestComments = () => {
//   return db
//     .collection("comments") // creo la collection de firestore
//     .orderBy("createdAt", "desc") // primero poner el campo a considerar y luego ascendente o descendente (para acomodar los tweets)
//     .get() //method para traer la info de firestore
//     .then((docs) => {
//       return docs.docs.map((doc) => {
//         return mapCommitFromFirebaseToCommitObject(doc) 
//       });
//     });
// };

//UPLOAD A FILE // Photo //

export const uploading = (file) => {
  const fileName = file.name
  const storageRef = firebase.storage().ref();
  const mountainImagesRef = storageRef.child(`images/${file.name}`); 
  const task = mountainImagesRef.put(file)

  return task

};



// LOGOUT

export const logout = () =>{
  firebase.auth().signOut();
}