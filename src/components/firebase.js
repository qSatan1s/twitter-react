import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDx_wc1QZsC-1HI8adiEDiPqk9vcXcouug',
  authDomain: 'twitter-react-664d7.firebaseapp.com',
  databaseURL: 'https://twitter-react-664d7.firebaseio.com',
  projectId: 'twitter-react-664d7',
  storageBucket: 'twitter-react-664d7.appspot.com',
  messagingSenderId: '385392825819',
  appId: '1:385392825819:web:938a8a0b5a7a063750c3fe',
  measurementId: 'G-ESV6Q3BSW3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
