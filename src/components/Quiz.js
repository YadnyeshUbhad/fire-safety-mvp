import React, { useState } from "react";
import { saveScore } from "../utils/saveScore";

const questions = [
  {
    q: "What is the first thing to do when a fire alarm rings?",
    options: ["Evacuate immediately", "Call family", "Check Instagram", "Ignore it"],
    answer: "Evacuate immediately"
  },
  {
    q: "What extinguisher is used for electrical fires?",
    options: ["Water", "Foam", "CO2", "Sand"],
    answer: "CO2"
  }
];

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleAnswer = (opt) => {
    if (opt === questions[qIndex].answer) {
      setScore(score + 1);
    }
    if (qIndex + 1 < questions.length) {
      setQIndex(qIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  return (
    <div className="card">
      <h3>AI Skill Assessment Quiz</h3>
      {!completed ? (
        <>
          <p><strong>{questions[qIndex].q}</strong></p>
          {questions[qIndex].options.map((opt, idx) => (
            <button key={idx} onClick={() => handleAnswer(opt)}>{opt}</button>
          ))}
        </>
      ) : (
        <p>Quiz complete! Your score: {score}/{questions.length}</p>
      )}
    </div>
  );
};

saveScore("neoGenesis_user", 8);

export default Quiz;
