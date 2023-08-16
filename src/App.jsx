import React from 'react';
import Hero from './components/hero/Hero';
import Bio from './components/Bio/Bio';
import Skills from './components/skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Contacts from './components/Contacts/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <React.Fragment>
      <Hero/>
      <Bio/>
      <Skills/>
      <Portfolio/>
      <Contacts/>
    </React.Fragment>
  );
}

export default App;
