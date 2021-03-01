import React, { useState, useEffect } from "react";
import "./App.css";
import IndividualPlayer from "./components/IndividualPlayer/IndividualPlayer";
import playerInformation from "./fake data/fakeData.json";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap";

function App() {
  const [players, setPlayers] = useState([]);
  const [teamPlayers, setTeamPlayers] = useState([]);

  const handleAddPlayer = (player) => {
    let indexValue = teamPlayers.indexOf(player);
    if (indexValue === -1) {
      const newList = [...teamPlayers, player];
      setTeamPlayers(newList);
      console.log(newList);
    } else {
      alert("Selected already");
    }
  };

  useEffect(() => {
    setPlayers(playerInformation);
  }, []);

  const totalBudget = teamPlayers.reduce(
    (total, player) => total + player.Auction,
    0
  );

  return (
    <div className="App">
      <h1 className="header">Record Setter Eleven</h1>

      <div className="players-container">
        <Container>
          <h2 style={{ textAlign: "center" }}>
            Players (available:{" "}
            {players.length - teamPlayers.length > 0
              ? players.length - teamPlayers.length
              : "---"}
            / selected: {teamPlayers.length > 16 ? "DONE" : teamPlayers.length})
          </h2>
          <Row>
            {players.map((player) => (
              <Col sm={12} md={6} lg={4} key={player.id}>
                <IndividualPlayer
                  player={player}
                  handleAddPlayer={handleAddPlayer}
                ></IndividualPlayer>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="team-container">
        <Container className="team-selection">
          <h2 style={{ textAlign: "center" }}>Selected Team</h2>
          <Card style={{ width: "16rem" }}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h6>Number of Players: {teamPlayers.length}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Players name & auction price</h6>
                {teamPlayers.map((player) => (
                  <SelectedPlayers
                    key={player.id}
                    player={player}
                  ></SelectedPlayers>
                ))}
              </ListGroup.Item>
              <ListGroup.Item>
                <h6>Total Budget: ${totalBudget}</h6>{" "}
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default App;
