import { db } from "@/firebase/config"
import { addDoc, collection } from "firebase/firestore"

export async function createCase(data: any) {
  try {
    const docRef = await addDoc(collection(db, "Cases"), data)
    console.log("Document written with ID: ", docRef.id)
    return docRef.id
  } catch (error) {
    console.error("Error adding document: ", error)
    throw error
  }
}
