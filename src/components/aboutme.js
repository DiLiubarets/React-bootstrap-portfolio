import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import { Col, Row } from "react-bootstrap";
import SocialFollow from "./SocialFollow";

export default class aboutme extends Component {
  render() {
    return (
      <Media  >
        <Row >
          <Col md={4} xs={12} fluid>
            <Image
            
              width={380}
              height={350}
              className="ml-6 img"
              src={require("./octocat.png")}
              alt="Generic placeholder"
              fluid
              thumbnail
            />
            <br />
            <SocialFollow />
          </Col>

          <Col md={8} xs={12}>
            <Media.Body className="text-aboutme"> 
              <h2>About me</h2>
              <h4>
                My mission is to help businesses take advantage of current
                technology.
              </h4>

              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    );
  }
}
