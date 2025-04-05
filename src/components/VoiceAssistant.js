import React, { useState } from "react";

const VoiceAssistant = () => {
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");
  const [listening, setListening] = useState(false);

  const responses = {
    "how to use a fire extinguisher": "Pull the pin, aim at the base, squeeze the handle, and sweep side to side.",
    "what to do if there's smoke": "Stay low, cover your nose and mouth, and move to the nearest exit.",
    "where is the fire exit": "Look for illuminated exit signs and follow the safest route away from the fire.",
  };

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition() || new window.SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();
    setListening(true);

    recognition.onresult = (event) => {
      const spoken = event.results[0][0].transcript.toLowerCase();
      setTranscript(spoken);

      const answer = Object.keys(responses).find((key) => spoken.includes(key));
      setResponse(answer ? responses[answer] : "Sorry, I don’t have an answer for that yet.");

      setListening(false);
    };
  };

  return (
    <div className="card">
      <h3>🎙️ Voice Assistant</h3>
      <button onClick={startListening}>
        {listening ? "Listening..." : "Ask a Fire Safety Question"}
      </button>
      <p><strong>You said:</strong> {transcript}</p>
      <p><strong>Assistant:</strong> {response}</p>
    </div>
  );
};

export default VoiceAssistant;
