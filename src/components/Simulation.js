import React, { useState } from "react";

const Simulation = () => {
  const [step, setStep] = useState(0);
  const steps = [
    "Fire detected in kitchen. What do you do?",
    "You pull the alarm and call emergency services.",
    "Guide guests to the nearest exit.",
    "Simulation complete!"
  ];

  return (
    <div className="card">
      <h3>2D Fire Drill Simulation</h3>
      <p>{steps[step]}</p>
      {step < steps.length - 1 && (
        <button onClick={() => setStep(step + 1)}>Next</button>
      )}
    </div>
  );
};

export default Simulation;
