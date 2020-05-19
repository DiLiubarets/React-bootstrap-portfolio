import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import SocialFollow from "./SocialFollow";

class Home extends Component {
  render() {
    return (
      <Jumbotron className="jumbotron">
        <h1 class="display-4">Full Stack Web Developer</h1>
        <br />
        <h5>a person who can develop both client and server software.</h5>
        <br />
        <br />
        <p>
          In addition to mastering HTML and CSS, also knows how to:
          <br />
          Program a browser (like using JavaScript, jQuery, Angular, or React)
          <br />
          Program a server (like using Node)
          <br />
          Program a database (like using mySQL, MongoDB)
        </p>
        <br />
        <br />
        <SocialFollow />
      </Jumbotron>
    );
  }
}
export default Home;
