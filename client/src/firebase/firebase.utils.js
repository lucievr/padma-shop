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

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const updateUserProfileDoc = async (userId, fieldName, fieldValue) => {
  const userRef = firestore.doc(`users/${userId}`);

  try {
    await userRef.update({
      [fieldName]: fieldValue,
    });
  } catch (error) {
    console.log('error updating user', error.message);
  }
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch(); // used for multiple writes as a single op
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc(); // firebase creates a ref with an auto-generated unique id
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    console.log(doc.data());
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.split(' ').join('-').toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[
      collection.title.split(' ').join('-').toLowerCase()
    ] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
