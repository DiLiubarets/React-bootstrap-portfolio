import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import SocialFollow from "./SocialFollow";

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="jumbotron">
          <h1 style={{color: 'gray'}} > Hello, my name is </h1>
           <h1 class="display-4"> Dina Liubarets</h1>
          <br />
          <h3 style={{marginTop:'0%'}}>I'm full stack web developer </h3>
          <h4 style={{float: 'right'}}> </h4>

          <SocialFollow  />
        
        </Jumbotron>
        <br />

        <Container>
        <hr /> 
        <h4 id="center">Some of my latest projects</h4><br/>
          <Row className="justify-content-md-center">
            <Col xs={12} md={4}>
              <Card>
                <Card.Img variant="top" src={require("../components/assets/todolist.png")} />
                <Card.Body>
                  <Card.Link href="https://diliubarets.github.io/toDoListReact/">
                    <Card.Title>"To do list" with React.js</Card.Title>
                  </Card.Link>
                  <Card.Link href="https://github.com/DiLiubarets/toDoListReact">Code</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} md={4}>
              <Card>
                <Card.Img
                  variant="top"
                  src={require("../components/assets/burger.png")}
                />
                <Card.Body>
                  <Card.Link href="https://warm-crag-56059.herokuapp.com">
                    <Card.Title>Burger-App</Card.Title>
                  </Card.Link>
                  <Card.Link href="https://github.com/DiLiubarets/myBurger-App">Code</Card.Link>
                </Card.Body>
              </Card>
              <br />
            </Col>
          </Row>
         <Row className="justify-content-md-center">
          <Button href="./projects" variant="secondary" size="md">
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
