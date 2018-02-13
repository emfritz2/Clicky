import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";


const About = () =>
  <div>
    <Hero backgroundImage="https://www.planwallpaper.com/static/images/colorful-triangles-background_yB0qTG6.jpg">
      <h1>Click Game</h1>
      <h3>Click on an image to earn 1 point.<br />Don't click on an image more than once or the game ends!</h3>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">

        </Col>
      </Row>
    </Container>
  </div>;

export default About;