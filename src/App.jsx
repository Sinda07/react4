import React from "react";
import PlayersList from "./components/PlayersList";
import "../src/components/style.css";

function App() {
  return (
    <div className="card-title">
      <h1>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App;
