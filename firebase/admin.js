



const admin = require("firebase-admin");



//para evitar que se inicie de nuevo y de error lo hago con try.
try{
  admin.initializeApp({
    credential: admin.credential.cert(process.env.JSONKEY),
    databaseURL: "https://qatar-app-3478a.firebaseio.com" 
  });
}catch (e) { console.log(e);}




export const firestore = admin.firestore()