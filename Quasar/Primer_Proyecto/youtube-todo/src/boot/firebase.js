import * as firebase from "firebase/app"
import "firebase/firestore"
var firebaseConfig = {
    apiKey: "AIzaSyCHTRDICyv4ZezhqKiOKVMXn4O1NfaqLDs",
    authDomain: "todo-78218.firebaseapp.com",
    databaseURL: "https://todo-78218.firebaseio.com",
    projectId: "todo-78218",
    storageBucket: "todo-78218.appspot.com",
    messagingSenderId: "110001607139",
    appId: "1:110001607139:web:bb5f41afeb2f3cd18410d6"
  };
  // Initialize Firebase
  let FirebaseApp=firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore()
  export {db , FirebaseApp}
  // 