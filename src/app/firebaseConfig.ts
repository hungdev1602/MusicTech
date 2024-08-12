import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDfA44Gz6zgDL7JA8cKiB3FKWUEzKb3fc4",
  authDomain: "hungmp3-85caf.firebaseapp.com",
  databaseURL: "https://hungmp3-85caf-default-rtdb.firebaseio.com",
  projectId: "hungmp3-85caf",
  storageBucket: "hungmp3-85caf.appspot.com",
  messagingSenderId: "799887774278",
  appId: "1:799887774278:web:2697621d00a19a83af3047"
};


const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);

export { dbFirebase };