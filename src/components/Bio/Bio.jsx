import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Bio = () => {
  return (
    
    <section id="bio" className="py-5">
    <Container>
      <Row>
        <Col md={6}>
          <h2>Bio & About Me</h2>
          <p>Education</p>
          <p>Experiences</p>
          <Button href="path/to/cv.pdf" variant="primary" className="bg-dark text-white">Download CV</Button>
        </Col>
      </Row>
    </Container>
  </section>
  
  

  );
}

export default Bio;
