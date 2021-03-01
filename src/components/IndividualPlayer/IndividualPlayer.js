import React from "react";
import "./IndividualPlayer.css";

const IndividualPlayer = (props) => {
  const { image, name, Born, Nationality, Role, Auction } = props.player;

  return (
    <div className="individual-player">
      <div className="individual-player-intro">
        <img style={{ width: "150px", height: "100px" }} src={image} alt="" />
        <h3 style={{ paddingLeft: "15px" }}>{name}</h3>
      </div>
      <div className="individual-player-detail-info">
        <h4>Personal Information</h4>
        <p>
          <strong>Born:</strong> <em>{Born}</em>
        </p>
        <p>
          <strong>Nationality:</strong> <em>{Nationality}</em>
        </p>
        <p>
          <strong>Role:</strong> <em>{Role}</em>
        </p>
        <p>
          <strong>Auction Price:</strong> <em>${Auction}</em>
        </p>
      </div>
      <button onClick={() => props.handleAddPlayer(props.player)}>
        Add to Team
      </button>
    </div>
  );
};

export default IndividualPlayer;
