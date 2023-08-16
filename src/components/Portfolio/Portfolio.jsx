import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Portfolio = () => {
  return (
    
    <section id="portfolio" className="py-5">
      <Container>
        <h2 className="text-center">Portfolio</h2>
        <Container className="text-center">
          <Row>
            <Col>
              <Card style={{ width: '18rem' }} className=" bg-dark text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }} className=" bg-dark text-white">
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  

  );
}

export default Portfolio;
