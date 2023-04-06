// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyANjSJrLfumyuofFMKaVGNpRsFdakE0Tcc",
  authDomain: "amy-website-eeebe.firebaseapp.com",
  projectId: "amy-website-eeebe",
  storageBucket: "amy-website-eeebe.appspot.com",
  messagingSenderId: "710433037149",
  appId: "1:710433037149:web:bcaaf148366110af1926b4",
  measurementId: "G-KVY08RS90G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  provider.setCustomParameters({ prompt: 'select_account' });
  await signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
        .then(() => {
          console.log("Document successfully written!");
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = async () => {
  signOut(auth).then(() => {
    window.location.reload(false);
  }).catch((error) => {
    console.log(error);
  });
};