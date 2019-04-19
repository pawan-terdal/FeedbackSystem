import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCUkKl51E11kRLAuVLjI8cZ34MYrLzgKWQ",
    authDomain: "feedbacksystem-43a8a.firebaseapp.com",
    databaseURL: "https://feedbacksystem-43a8a.firebaseio.com",
    projectId: "feedbacksystem-43a8a",
    storageBucket: "feedbacksystem-43a8a.appspot.com",
    messagingSenderId: "73702656723"
  };
  firebase.initializeApp(config);
  const dbConn = firebase.firestore();
  export default dbConn;