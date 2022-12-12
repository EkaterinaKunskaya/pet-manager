import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDXgmf5rKyOu02H47ELCjg3JQz1YVSGeqA",
    authDomain: "pet-manager-88ca8.firebaseapp.com",
    databaseURL: "https://pet-manager-88ca8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pet-manager-88ca8",
    storageBucket: "pet-manager-88ca8.appspot.com",
    messagingSenderId: "525773908001",
    appId: "1:525773908001:web:0dc1eace9cc0667d7c1b60"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.database();

export const MyFirebase = {
    firebase,
    database
}