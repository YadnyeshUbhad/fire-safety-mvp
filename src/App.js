import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Quiz from "./components/Quiz";
import Simulation from "./components/Simulation";
import ManagerDashboard from "./components/ManagerDashboard";
import VoiceAssistant from "./components/VoiceAssistant";
import Leaderboard from "./components/Leaderboard";
import Badges from "./components/Badges";
const userName = "neoGenesis_user"; // or get from state/context


function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Fire Safety Training Platform</h1>
        <Quiz />
        <Simulation />
        <ManagerDashboard />
        <VoiceAssistant />
        <Badges userName={userName} />
        <Leaderboard />
      </div>
    </div>
  );
}

export default App;
