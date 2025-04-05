import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveScore = async (username, score) => {
  try {
    await addDoc(collection(db, "quizScores"), {
      username,
      score,
      timestamp: serverTimestamp(),
    });
    console.log("✅ Score saved to Firestore!");
  } catch (error) {
    console.error("❌ Error saving score:", error);
  }
};
