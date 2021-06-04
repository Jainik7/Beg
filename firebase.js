import firebase from "firebase";

const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyDe48RtlyXkmKKbzIuSfsG0Q0FzQhOLLQ8",
  authDomain: "instagram-clone-fd61f.firebaseapp.com",
  databaseURL: "https://instagram-clone-fd61f-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-fd61f",
  storageBucket: "instagram-clone-fd61f.appspot.com",
  messagingSenderId: "609396412404",
  appId: "1:609396412404:web:cce7271f5c09f3921cf3a1",
  measurementId: "G-0VXT4LTVW7"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default firebaseConfig;