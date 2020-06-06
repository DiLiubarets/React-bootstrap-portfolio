import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Container, Row, Col } from "react-bootstrap";

export default class certificates extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row lassName="justify-content-md-center">
            <Col xs={12} md={6}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Full stack web developer</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={6}>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../components/assets/diploma.jpg")}
                />
                <Card.Body>
                  <Card.Title>Bachelor of Law</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
