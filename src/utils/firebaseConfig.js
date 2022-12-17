// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIgN5e4oIQBJvO18L5wx6ejD4oGCrpbHw",
  authDomain: "sinapsis-react.firebaseapp.com",
  projectId: "sinapsis-react",
  storageBucket: "sinapsis-react.appspot.com",
  messagingSenderId: "89931544095",
  appId: "1:89931544095:web:d831246765945e32f4072a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
