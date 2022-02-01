import { initializeApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVDoTi2XZknM0A7ODuEp85uGxpTgNzSvg',
  authDomain: 'poetizeapp.firebaseapp.com',
  projectId: 'poetizeapp',
  storageBucket: 'poetizeapp.appspot.com',
  messagingSenderId: '72681012529',
  appId: '1:72681012529:web:b3ec81c19f790d4c90c410',
  measurementId: 'G-TDKRQ5G2JQ',
};
const app = initializeApp(firebaseConfig);

class FirebaseService {
  static instance: FirebaseService;
  firestore!: Firestore;

  constructor() {
    if (!FirebaseService.instance) {
      FirebaseService.instance = this;
      this.firestore = getFirestore();
    }

    return FirebaseService.instance;
  }
}
const firebaseService = new FirebaseService();

export default firebaseService;
