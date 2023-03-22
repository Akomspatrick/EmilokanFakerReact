import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { faker } from "@faker-js/faker";
import logo from './logo.svg';
const MyCard = (props) => {
  return (
    <Card style={{ width: "18rem", color: "red" }}>
      <Card.Img variant="top" src={faker.image.cats()} />
      <Card.Body>
        <Card.Title>{props.header}</Card.Title>
        {props.children}
        <Button variant="primary">Go somewhere</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </Card.Body>
    </Card>
  );
};

export default MyCard;
