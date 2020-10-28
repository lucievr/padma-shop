import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyC3EhVzB2Ra4vvyMV40kGwo80PSX3AaQ0c',
  authDomain: 'padma-db.firebaseapp.com',
  databaseURL: 'https://padma-db.firebaseio.com',
  projectId: 'padma-db',
  storageBucket: 'padma-db.appspot.com',
  messagingSenderId: '683641787540',
  appId: '1:683641787540:web:63c135e6016075e7995081',
  measurementId: 'G-L28NBVQZ6B',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
