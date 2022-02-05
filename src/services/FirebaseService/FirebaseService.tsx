import { initializeApp } from 'firebase/app';

import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVDoTi2XZknM0A7ODuEp85uGxpTgNzSvg',
  authDomain: 'poetizeapp.firebaseapp.com',
  databaseURL: 'https://poetizeapp-default-rtdb.firebaseio.com',
  projectId: 'poetizeapp',
  storageBucket: 'poetizeapp.appspot.com',
  messagingSenderId: '72681012529',
  appId: '1:72681012529:web:0c7cf52c17c64bea90c410',
  measurementId: 'G-9TVG5SJY76',
};

const app = initializeApp(firebaseConfig);

class FirebaseService {
  static instance: FirebaseService;
  firestore!: Firestore;

  constructor() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = this;
      this.firestore = getFirestore(app);
    }

    return FirebaseService.instance;
  }
}
const firebaseService = new FirebaseService();

export default firebaseService;
