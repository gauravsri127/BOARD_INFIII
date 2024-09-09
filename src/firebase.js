import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCihx37kH76wApEMCOneZ281wfmK6Oqqu0",
  authDomain: "flowboard-c5683.firebaseapp.com",
  projectId: "flowboard-c5683",
  storageBucket: "flowboard-c5683.appspot.com",
  messagingSenderId: "1045162944237",
  appId: "1:1045162944237:web:28cbe59746c28fcd3c4ee4"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8081);
  connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
