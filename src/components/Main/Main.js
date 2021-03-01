import React, { useState, useEffect } from "react";
import IndividualPlayer from "../IndividualPlayer/IndividualPlayer";

import "./Main.css";
import playerInformation from "../../fake data/fakeData.json";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";

const Main = () => {
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  const handleAddPlayer = (player) => {
    const newList = [...teamPlayers, player];
    setTeamPlayers(newList);
    console.log(newList);
  };

  useEffect(() => {
    setPlayers(playerInformation);
  }, []);

  const totalBudget = teamPlayers.reduce(
    (total, player) => total + player.Auction,
    0
  );
  return (
    <div className="main">
      <div className="players-container">
        {players.map((player) => (
          <IndividualPlayer
            player={player}
            key={player.id}
            handleAddPlayer={handleAddPlayer}
          ></IndividualPlayer>
        ))}
        {/* <Players></Players> */}
      </div>
      <div className="team-container">
        <h4>Selected Team</h4>
        <h4>Number of Players: {teamPlayers.length}</h4>
        <div className="selected-players-container">
          <h4>Players name & auction price</h4>
          {teamPlayers.map((player) => (
            <SelectedPlayers key={player.id} player={player}></SelectedPlayers>
          ))}
        </div>
        <h4>Total Budget:{totalBudget} </h4>
      </div>
    </div>
  );
};

export default Main;
