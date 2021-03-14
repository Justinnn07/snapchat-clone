import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDfxQSFNJwecfjrc9ScxRMSmHzg_zH8WiM",
  authDomain: "snapchat-clone-3011.firebaseapp.com",
  projectId: "snapchat-clone-3011",
  storageBucket: "snapchat-clone-3011.appspot.com",
  messagingSenderId: "484960463311",
  appId: "1:484960463311:web:17ae5bb774aa5d9ebf8aba",
  measurementId: "G-CNG6V5VW71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const db = firebaseApp.firestore();

const storage = firebaseApp.storage();

export { auth, provider, db, storage };
