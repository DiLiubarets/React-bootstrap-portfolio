import React, { Component } from "react";
import Image from "react-bootstrap/Image";
import Media from "react-bootstrap/Media";
import { Col, Row } from "react-bootstrap";
import SocialFollow from "./SocialFollow";

export default class aboutme extends Component {
  render() {
    return (
      <Media>
        <Row>
          <Col md={4} xs={12} fluid>
            <Image
              width={380}
              height={350}
              className="ml-6 img"
              src={require("./assets/about.jpeg")}
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
              {/* <h4>
                My mission is to help businesses take advantage of current
                technology.
              </h4> */}

              <p>
                I'm a Lawyer who code. I finished law school in Ukraine and
                practice for 3 years. In 2013 I moved to Canada. For last 6
                years I was growing a family and helping with our family
                business that where I start being interested in codding
                websites. This hobby become a passion and in May 2020 I took
                Carleton university 24 weeks of codding boot camp. Sitting next
                to computer and solving a problems, learning technology became
                part of my life where I feel comfortable and exited to learn and
                build.
              </p>
              <p>
                For last few years I'm having a instagram blog where I share
                with world my life. Where I exploring a world through traveling
                and fulfill my other passion photos with videos and adventures
                that come with them. Fashion one more part of my life where I
                can show and describe my self to world. I always keep up with
                time. Im good with leadership and time management skills.
                Responsible and open person. Open for everything new with
                respect too old things. Im really diversified where i know how
                to read stars with astropsychology in the same time I know
                criminal Law and how to build front and end websites. “Be the
                CEO of your life.” (Robin Sharma) - my life quote!
              </p>
              <p>
                “Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.” ― Martin
                Fowler I enjoy turning complex problems into simple, beautiful
                designs and clean elegant and efficient code.
              </p>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    );
  }
}
