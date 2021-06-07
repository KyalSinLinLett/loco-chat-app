import firebase from 'firebase/app';
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB3vM7CJAgN0dyVeYd3NxFcW-0Mv3Jmttg",
    authDomain: "loco-chat-app.firebaseapp.com",
    projectId: "loco-chat-app",
    storageBucket: "loco-chat-app.appspot.com",
    messagingSenderId: "111141300576",
    appId: "1:111141300576:web:3c7bc55fe68a46f5a5d605"
};

const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth, firebase};
