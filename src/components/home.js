import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import SocialFollow from "./SocialFollow";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1 style={{color: 'gray'}} > Hello, my name is </h1>
           <h1 class="display-4"> Dina Liubarets</h1>
          <br />
          <h3 style={{marginTop:'20%'}}>I'm full stack web developer </h3>
          <h4 style={{float: 'right'}}>And I code cool websites </h4>

          {/* <SocialFollow /> */}
        
        </Jumbotron>
        <br />

        <Container>
        <hr /> 
        <h4 id="center">Some of my latest projects</h4><br/>
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src="holder.js/100px120" />
                <Card.Body>
                  <Card.Link href="">
                    <Card.Title></Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src="holder.js/100px120"
                  // src={require("../components/assets/")}
                />
                <Card.Body>
                  <Card.Link>
                    <Card.Title></Card.Title>
                  </Card.Link>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
         <Row className="justify-content-md-center">
          <Button href="./projects.js" variant="secondary" size="md">
            My projects...
          </Button>
          </Row >
          <br/>
        </Container>
        <br/>
        <hr/>
        <br/>
        <h4 id="center"> My Skills</h4><br/>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>jQuery</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>Express.js</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Datebase Theory</li>
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Git and more</li>
              </ul>
            </Col>
          </Row>
        </Container>
        <br/>
      </div>
    );
  }
}
export default Home;
