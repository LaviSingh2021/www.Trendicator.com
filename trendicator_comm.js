// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFtbkxFu_DfHa62bs39kaGTAcVKunHkxA",
  authDomain: "kwitstagram.firebaseapp.com",
  databaseURL: "https://kwitstagram-default-rtdb.firebaseio.com",
  projectId: "kwitstagram",
  storageBucket: "kwitstagram.appspot.com",
  messagingSenderId: "1040303550078",
  appId: "1:1040303550078:web:52e296b88a8bb8726f322f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
