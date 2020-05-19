import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default class certificates extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Full stack web developer</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/diploma.jpg")}
            />
            <Card.Body>
              <Card.Title>Bachelor of Law</Card.Title>
            </Card.Body>
          </Card>
        </CardDeck>

        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/htmlcssforms .png")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/javascript.png")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/nodejs.png")}
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/time .png")}
            />
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/tm.png")}
            />
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
          </Card>
        </CardDeck>
      </div>
    );
  }
}
