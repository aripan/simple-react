import React from "react";
import Players from "../Players/Players";
import Team from "../Team/Team";
import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <div className="players-container">
        <Players></Players>
      </div>
      <div className="team-container">
        <Team></Team>
      </div>
    </div>
  );
};

export default Main;
