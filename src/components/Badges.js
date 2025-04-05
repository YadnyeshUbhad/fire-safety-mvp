import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Badges = ({ userName }) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const q = query(collection(db, "quizScores"), where("name", "==", userName));
      const snapshot = await getDocs(q);
      const userData = snapshot.docs.map(doc => doc.data())[0];

      let earned = [];

      if (userData?.score >= 80) earned.push({ title: "Quiz Master", emoji: "" });
      if (userData?.score >= 50) earned.push({ title: "Quick Responder", emoji: "⏱" });

      // More dynamic rules can go here...
      setBadges(earned);
    };

    fetchBadges();
  }, [userName]);

  return (
    <div className="card">
      <span>🏅 Your Badges</span>
      {badges.length ? (
        <ul>
          {badges.map((b, i) => (
            <li key={i}>
              <span style={{ fontSize: "24px", marginRight: "10px" }}>{b.emoji}</span>
              {b.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No badges yet. Keep going!</p>
      )}
    </div>
  );
};

export default Badges;
