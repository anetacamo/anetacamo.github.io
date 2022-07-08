import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // //measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,

  apiKey: "AIzaSyAuc8cgp4d1RdKYGq4rwmiUe9oLu7zOETM",
  authDomain: "blog-and-portfolio-aa32a.firebaseapp.com",
  projectId: "blog-and-portfolio-aa32a",
  storageBucket: "blog-and-portfolio-aa32a.appspot.com",
  messagingSenderId: "813788135914",
  appId: "1:813788135914:web:03e08e1c6f4711e9e7b293",

  // apiKey: "AIzaSyBblaV73W4NtRxlNm30WexGFmET13IC3GE",
  // authDomain: "anetacamo-store.firebaseapp.com",
  // databaseURL: "https://anetacamo-store-default-rtdb.firebaseio.com",
  // projectId: "anetacamo-store",
  // storageBucket: "anetacamo-store.appspot.com",
  // messagingSenderId: "422502129939",
  // appId: "1:422502129939:web:0f19967a4a5adac0b47ae6",
  // measurementId: "G-QZWRMP9P2G",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
