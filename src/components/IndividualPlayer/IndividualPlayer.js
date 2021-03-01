import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import "./IndividualPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const IndividualPlayer = (props) => {
  const { image, name, Born, Nationality, Role, Auction } = props.player;

  return (
    <Card style={{ width: "16rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "100%", height: "150px" }}
      />
      <Card.Header style={{ fontWeight: "700" }}>{name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Born: {Born}</ListGroup.Item>
        <ListGroup.Item>Nationality: {Nationality}</ListGroup.Item>
        <ListGroup.Item>Role: {Role}</ListGroup.Item>
        <ListGroup.Item>Auction Price: ${Auction}</ListGroup.Item>
      </ListGroup>
      <Button
        variant="primary"
        onClick={() => props.handleAddPlayer(props.player)}
      >
        <FontAwesomeIcon icon={faUserPlus} /> Add To Team
      </Button>
    </Card>
  );
};

export default IndividualPlayer;
