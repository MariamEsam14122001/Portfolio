import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
  return   (
    
    <footer className="py-5 bg-dark text-white">
      <Container>
        <Row>
          <Col>
            <h4>Contact Us</h4>
            <p>Email: example@example.com</p>
          </Col>
          <Col>
            <h4>Follow Us</h4>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>

  );;
}

export default Contacts;
