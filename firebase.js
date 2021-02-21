import * as firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDemAlaNPGyn-T7qcCrC5-Np8xUNqHmW0g",
  authDomain: "signal-clone-420cd.firebaseapp.com",
  projectId: "signal-clone-420cd",
  storageBucket: "signal-clone-420cd.appspot.com",
  messagingSenderId: "947541636405",
  appId: "1:947541636405:web:334c23e732fc90c9f9c87c"
};

  let app;
  //initialize firebase only if it hasn't been initialized.
  //doesn't keep on initializing. Cool!!
  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else{
    app = firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };