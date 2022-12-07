import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaCKIcokOZg6AwIOjuKVDL7ZpON1OcmJE",
  authDomain: "netflix-clone-c3129.firebaseapp.com",
  projectId: "netflix-clone-c3129",
  storageBucket: "netflix-clone-c3129.appspot.com",
  messagingSenderId: "213780955065",
  appId: "1:213780955065:web:179a233798db891b908068"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth};