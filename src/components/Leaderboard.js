import React, { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    const fetchLeaders = async () => {
      const q = query(collection(db, "quizScores"), orderBy("score", "desc"), limit(5));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => doc.data());
      setLeaders(data);
    };

    fetchLeaders();
  }, []);

  return (
    <div className="card">
      <p>Congrats! <span role="img" aria-label="party popper">🎉</span></p>

      <ol>
        {leaders.map((user, index) => (
          <li key={index}>
            {user.name} - {user.score} pts
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
