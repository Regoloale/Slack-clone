import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmhTCLJiFc9o-Rt6JMWHcQj7dJ_TvYWpE",
  authDomain: "slack-clone-10b8f.firebaseapp.com",
  projectId: "slack-clone-10b8f",
  storageBucket: "slack-clone-10b8f.appspot.com",
  messagingSenderId: "293150948625",
  appId: "1:293150948625:web:bb7d847c687d31629aa0b0"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }
