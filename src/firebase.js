import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAwyt-6fa5zD1zZYszZyrJu4XRpYUirQsA",
    authDomain: "rentorsell-6b825.firebaseapp.com",
    projectId: "rentorsell-6b825",
    storageBucket: "rentorsell-6b825.appspot.com",
    messagingSenderId: "346106061456",
    appId: "1:346106061456:web:1dbdb206fda2bcc876ae15",
    measurementId: "G-2QGVSF26Y3"
  };
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db, storage, auth };
