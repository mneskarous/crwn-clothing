import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBmVSLXge0AkleCZWCku9JCbIO3Jhm_7UQ",
  authDomain: "crwn-db-61cd3.firebaseapp.com",
  databaseURL: "https://crwn-db-61cd3.firebaseio.com",
  projectId: "crwn-db-61cd3",
  storageBucket: "crwn-db-61cd3.appspot.com",
  messagingSenderId: "810608188232",
  appId: "1:810608188232:web:1585e10f55c4bc1c69f17d",
  measurementId: "G-FJK2QEHMP5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;