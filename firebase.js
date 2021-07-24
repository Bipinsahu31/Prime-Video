import firebase from "firebase/app";

import "firebase/auth"; //Auth
import  "firebase/database";  //database
import "firebase/storage"; //storage images



const firebaseConfig = {
    apiKey: "AIzaSyAsDDcZu-R7wl7ZxTpKHMZtT_kFINwlDRc",
    authDomain: "prime-e9e16.firebaseapp.com",
    databaseURL: "https://prime-e9e16.firebaseio.com",
    projectId: "prime-e9e16",
    storageBucket: "prime-e9e16.appspot.com",
    messagingSenderId: "1059725104755",
    appId: "1:1059725104755:web:accd35def01ab6cfe5fc06"
  };

  firebase.initializeApp(firebaseConfig);//firebase  init
  export default firebase;