import {
  setDoc,
  doc,
  getDoc,
  collection,
  getDocs,
  FirestoreDataConverter,
  query,
  where,
  Firestore,
  CollectionReference,
} from 'firebase/firestore';

import { TextTO } from 'types';

// long path because of *required cycle*
import FirebaseService from 'services/FirebaseService/FirebaseService';

const textConverter: FirestoreDataConverter<TextTO> = {
  toFirestore: (text: TextTO) => {
    return {
      id: text.id,
      title: text.title,
      body: text.body,
      flow: text.flow,
      status: text.status,
      backgroundColor: text.backgroundColor,
      fontStyle: text.fontStyle,
      wordsCount: text.wordsCount,
      charsCount: text.charsCount,
      deletedAt: text.deletedAt,
      editedAt: text.editedAt,
      createdAt: text.createdAt,
    };
  },
  fromFirestore: (snapshot, options): TextTO => {
    const data = snapshot.data(options);
    return {
      id: data.id,
      title: data.title,
      body: data.body,
      flow: data.flow,
      status: data.status,
      backgroundColor: data.backgroundColor,
      fontStyle: data.fontStyle,
      wordsCount: data.wordsCount,
      charsCount: data.charsCount,
      deletedAt: data.deletedAt,
      editedAt: data.editedAt,
      createdAt: data.createdAt,
    };
  },
};

class TextService {
  static instance: TextService;
  firestore!: Firestore;
  textColletion!: CollectionReference;

  constructor() {
    if (!TextService.instance) {
      TextService.instance = this;
      this.firestore = FirebaseService.firestore;
      this.textColletion = collection(this.firestore, 'texts');
    }

    return TextService.instance;
  }
  async storeText(value: TextTO) {
    try {
      await setDoc(doc(this.textColletion, value.id), value);
    } catch (error) {
      console.log('Error:', error);
      return Promise.reject(error);
    }
  }

  async getSingleText(id: string) {
    try {
      const res = await getDoc(
        doc(this.textColletion, id).withConverter(textConverter)
      );
      if (res.exists()) {
        return res.data();
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error:', error);
      return Promise.reject(error);
    }
  }

  async getAllTexts() {
    try {
      const res = await getDocs(this.textColletion);
      const allTexts: TextTO[] = [];
      if (res) {
        res.forEach(text => {
          allTexts.push(text.data() as TextTO);
        });
        return allTexts;
      } else {
        return null;
      }
    } catch (error) {
      console.log('Error:', error);
      return Promise.reject(error);
    }
  }

  async getSomeTexts(idsArray: string[]) {
    const someTexts: TextTO[] = [];
    const q = query(this.textColletion, where('id', 'in', idsArray));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(text => {
      someTexts.push(text.data() as TextTO);
    });
    return someTexts;
  }
}
const textService = new TextService();

export default textService;
