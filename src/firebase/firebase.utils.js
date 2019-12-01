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

export const createUserProfileDocument =  async (userAuth, additionalData) => {
  if (!userAuth) {return;}

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email,
        createdAt,
        ...additionalData
      })
    } catch(err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;