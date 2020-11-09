import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database'








var firebaseConfig = {
    apiKey: "AIzaSyDwI7wKmyu5fS5CKdy7hYQJxLa2Nsuu2Lc",
    authDomain: "olx-clone-8712c.firebaseapp.com",
    databaseURL: "https://olx-clone-8712c.firebaseio.com",
    projectId: "olx-clone-8712c",
    storageBucket: "olx-clone-8712c.appspot.com",
    messagingSenderId: "729571183428",
    appId: "1:729571183428:web:af5fbd29e851a7a39e2511",
    measurementId: "G-88BBGC5XF4"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export const ref = firebase.database().ref()
  export const auth = firebase.auth
  export const provider = new firebase.auth.FacebookAuthProvider()
