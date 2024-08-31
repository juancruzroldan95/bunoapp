import { db } from '@/firebase/config';
import { addDoc, collection } from 'firebase/firestore';

export async function createCase(data) {
  try {
    const docRef = await addDoc(collection(db, 'Cases'), data);
    console.log('Document written with ID: ', docRef.id);
    return docRef.id;
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
}
