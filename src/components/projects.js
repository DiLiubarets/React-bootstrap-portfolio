import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default class projects extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px120" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px120" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px120" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px120" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}
