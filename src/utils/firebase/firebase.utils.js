import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import configData from '../../config.json';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = configData;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize GoogleAuthProvider - providers (different way to sign in and use authentication)
const provider = new GoogleAuthProvider();

// Set our custom params
provider.setCustomParameters({
  prompt: 'select_account',
});

// Initialize Firebase Authentication - rules for authentication is same for all applications
export const auth = getAuth();

// Sign in with redirect
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// This singleton instance allows us to access the db directly
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  console.log(configData);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // Create a document with data
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
