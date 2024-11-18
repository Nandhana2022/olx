import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBO02TopSSKNIYEa-PDRTkmuP2CtNlh9sQ",
    authDomain: "olx-clone-934c0.firebaseapp.com",
    projectId: "olx-clone-934c0",
    storageBucket: "olx-clone-934c0.appspot.com",
    messagingSenderId: "422783055680",
    appId: "1:422783055680:web:d7e7412734ab40be71aca5",
    measurementId: "G-20FEGC1LNG"
  };
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);

  export  { firebaseApp, auth,db };
  