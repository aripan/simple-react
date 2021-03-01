import React from "react";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import "./Team.css";

const Team = () => {
  return (
    <div>
      <h4>Selected Team</h4>
      <h4>Number of Players: 0</h4>
      <div className="selected-players-container">
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
        <SelectedPlayers></SelectedPlayers>
      </div>
      <h4>Total Budget: 0</h4>
    </div>
  );
};

export default Team;
