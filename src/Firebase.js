// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
function StartFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyDEYBTAZQSTC1oNc8uW_FRUxmXyCMZidwo",
    authDomain: "project-demo-react.firebaseapp.com",
    databaseURL: "https://project-demo-react-default-rtdb.firebaseio.com",
    projectId: "project-demo-react",
    storageBucket: "project-demo-react.firebasestorage.app",
    messagingSenderId: "372748504099",
    appId: "1:372748504099:web:6fb42d4945e795ff85b596",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
