import { db } from "@/firebase/config"
import { getDoc, doc } from "firebase/firestore"

export async function getCaseById(caseId: string) {
  try {
    const docRef = await getDoc(doc(db, "Cases", caseId))
    if (docRef.exists()) {
      console.log("Document data:", docRef.data())
      return docRef.data()
    } else {
      console.log("No such document!")
      return null
    }
  } catch (error) {
    console.error("Error getting document: ", error)
    throw error
  }
}
