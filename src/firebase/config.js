import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBjaYQlEgQcHOC8BlRPNX2S2qOqwvMJArI',
  authDomain: 'muso-ninjas-2477c.firebaseapp.com',
  projectId: 'muso-ninjas-2477c',
  storageBucket: 'muso-ninjas-2477c.appspot.com',
  messagingSenderId: '615472805410',
  appId: '1:615472805410:web:0066677a8deef8f5b1bc7b',
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };
