import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA8-NdHDe9WmMxV9EJlMwZcW1mnY3h4MMg",
    authDomain: "ninja-firegram-68aa4.firebaseapp.com",
    databaseURL: "https://ninja-firegram-68aa4.firebaseio.com",
    projectId: "ninja-firegram-68aa4",
    storageBucket: "ninja-firegram-68aa4.appspot.com",
    messagingSenderId: "665794219813",
    appId: "1:665794219813:web:c50a3235d06206cade94cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };