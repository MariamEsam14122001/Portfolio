import React from 'react';
import {Container} from 'react-bootstrap' ;

const Hero = () => {
  return (
   
    <section id="hero" className="text-center py-5" style={{backgroundImage: "url('https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff')",
    backgroundRepeat:'no-repeat',
    backgroundPosition:'center center'}}>
      <Container>
        <h1 className="display-4">Mariam Essam</h1>
        <p className="lead">Web developer</p>
      </Container>
    </section>
 
  );
}

export default Hero;
