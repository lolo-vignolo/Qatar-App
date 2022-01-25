import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyDyvBPeeZs28YLZDwqagRygQYEnLYZU6B8",
  authDomain: "qatar-app-3478a.firebaseapp.com",
  projectId: "qatar-app-3478a",
  storageBucket: "qatar-app-3478a.appspot.com",
  messagingSenderId: "551734793641",
  appId: "1:551734793641:web:eb9262db869372531320b8",
  measurementId: "G-SFB937H387"
  };
  
  
firebase.initializeApp(firebaseConfig);




/* this is for authentification im google, and it is the sam efor facebook, twiter , github, etc. */

export const logingWithFacebook = () => {

  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  
  return firebase.auth().signInWithPopup(facebookProvider)
}
