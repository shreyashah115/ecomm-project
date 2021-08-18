var firebaseConfig = {
  apiKey: "AIzaSyB6-AAe68QiCaeB3loIORz6E6Hg3Znr7ec",
  authDomain: "webstore-9da1d.firebaseapp.com",
  projectId: "webstore-9da1d",
  storageBucket: "webstore-9da1d.appspot.com",
  messagingSenderId: "607890589045",
  appId: "1:607890589045:web:9ef7e8aa05f0b051c3ff3c",
};

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp(firebaseConfig);
export default firebase;
