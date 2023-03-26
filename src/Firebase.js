// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, getStorage } from "firebase/firestore";
import { doc, getDoc, addDoc, collection } from "firebase/firestore";

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

const getUserData = async (userId) => {
  const userRef = doc(db, 'users', userId);
  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error(error);
  }
};

export const signInWithGoogle = async () => {
  console.log(auth)
  await signInWithPopup(auth, provider)
    .then((result) => {
      if (!getUserData(result.user.uid)) {
        const collectionRef = collection(db, "Users")
        console.log(collectionRef)
        const payload = { name: result.user.displayName, email: result.user.email, isAdmin: false }
        addDoc(collectionRef, payload).then(() => console.log("user created"))
      }
      else {
        console.log("User exists")
      }

    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  signOut(auth).then(() => {
    window.location.reload(false);
  }).catch((error) => {
    console.log(error);
  });
};