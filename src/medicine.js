import { collection, getDocs } from "firebase/firestore";
import db from "./db";

export async function getMedicines() {
  const snapshot = await getDocs(collection(db, "medicines"));
  return snapshot.docs.map(doc => doc.data());
}
