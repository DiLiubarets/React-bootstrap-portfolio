import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export default class projects extends Component {
  render() {
    return (
      <div>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/seberianbuckwheat.png")}
            />
            <Card.Body>
              <Card.Link href="https://siberianbuckwheat.com">
                <Card.Title>Siberian Buckwheat Honey</Card.Title>
              </Card.Link>

              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/unheatedhoney.png")}
            />
            <Card.Body>
              <Card.Link href="https://unheatedhoney.ca/landing">
                <Card.Title>Unheated Honey</Card.Title>
              </Card.Link>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src={require("../components/assets/appoint.png")}
            />
            <Card.Body>
              <Card.Link href="https://floating-inlet-71164.herokuapp.com">
                <Card.Title>Doctor-checkup</Card.Title>
              </Card.Link>
              <Card.Text>
                Appointify: An Open Source project for booking doctor's
                appointments. With Appointify, you can pick the doctor you want
                to see and make an appointment with them easily. We are also
                providing up-to-date information on the COVID-19 statistics for
                Canada through an API.
              </Card.Text>
              <Card.Link href="https://github.com/DiLiubarets/Doctor-checkup">
                Code
              </Card.Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              ssrc={require("../components/assets/crypto.png")}
            />
            <Card.Body>
              <Card.Link href="https://diliubarets.github.io/LSD-project/">
                <Card.Title>Cryptocurrency project</Card.Title>
              </Card.Link>
              <Card.Text>
                is an exchange-neutral tool designed for the modern
                cryptocurrency/token traders. Whether you are a professional
                investor or an amateur enthusiast, LSD provides all the
                necessary tools to grab the market bull by its horns.
              </Card.Text>
              <Card.Link href="https://github.com/DiLiubarets/LSD-project">
                Code
              </Card.Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <CardDeck></CardDeck>
      </div>
    );
  }
}
