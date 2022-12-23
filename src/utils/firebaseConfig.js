import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIgN5e4oIQBJvO18L5wx6ejD4oGCrpbHw",
  authDomain: "sinapsis-react.firebaseapp.com",
  projectId: "sinapsis-react",
  storageBucket: "sinapsis-react.appspot.com",
  messagingSenderId: "89931544095",
  appId: "1:89931544095:web:d831246765945e32f4072a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
