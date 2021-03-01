import React, { useEffect, useState } from "react";
import IndividualPlayer from "../IndividualPlayer/IndividualPlayer";
import "./Players.css";
import playerInformation from "../../fake data/fakeData.json";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(playerInformation);
  }, []);

  const handleAddPlayer = () => {
    console.log("working");
  };

  return (
    <div>
      <h3>Players</h3>
      <div className="players">
        {players.map((player) => (
          <IndividualPlayer
            player={player}
            key={player.id}
            handleAddPlayer={handleAddPlayer}
          ></IndividualPlayer>
        ))}
      </div>
    </div>
  );
};

export default Players;
