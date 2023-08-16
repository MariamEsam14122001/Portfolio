import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';


const Skills = () => {
  return (
    <Container className="py-5 bg-dark text-white">
    <section id="skills" className="py-5" >
     
        <h2 className="text-center" >Skills</h2>
        <Row>
          <Col md={6}>
            <h4>Coding</h4>
            <ProgressBar variant="secondary" now={80} label="80%" />
          </Col>
          <Col md={6}>
            <h4>Problem solving</h4>
            <ProgressBar variant="secondary" now={70} label="70%" />
          </Col>
        </Row>
      
    </section>
    </Container>
    

  
  );
}

export default Skills;
