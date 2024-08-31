// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwMUlghz6KhZV9WzSyhnoX1-FRG9m14iA',
  authDomain: 'bunoapp-021023.firebaseapp.com',
  projectId: 'bunoapp-021023',
  storageBucket: 'bunoapp-021023.appspot.com',
  messagingSenderId: '873293604307',
  appId: '1:873293604307:web:35f9d2a25206f11efa3b26',
  measurementId: 'G-6FZDPK3S29',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
