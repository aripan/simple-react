import React from "react";

const SelectedPlayers = (props) => {
  const { name, Auction } = props.player;
  return (
    <div>
      <p>
        {name}, ${Auction}
      </p>
    </div>
  );
};

export default SelectedPlayers;
