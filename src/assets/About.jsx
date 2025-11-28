import React from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import Image5 from "./image5.webp"
import Image6 from "./image6.jpg"

function About() {
  return (
    <Container className="my-5">
      <Row className="text-center mb-5">
        <Col>
          <h1>About Our Company</h1>
          <p className="lead">We are dedicated to providing innovative solutions and exceptional service.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col md={4} className="text-center">
          <Card>
            <Image src={Image5} roundedCircle className="mx-auto d-block mt-3" style={{ width: '150px', height: '150px' }} />
            <Card.Body>
              <Card.Title>John Doe</Card.Title>
              <Card.Text>CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Image src={Image6} roundedCircle className="mx-auto d-block mt-3" style={{ width: '150px', height: '150px' }} />
            <Card.Body>
              <Card.Title>Jane Smith</Card.Title>
              <Card.Text>CTO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <Button variant="primary" size="lg">Contact Us</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;