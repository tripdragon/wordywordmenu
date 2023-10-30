import './fish.css';
import logo from './logo.svg';
import { useState } from 'react';

import './App.css';

import { WORDS } from './wordmenu.js';



// import { Personas } from './personas.js';


import { DefinitionCard } from './definitionCard.js';


// import { styled } from 'styled-components';

window.wwwords = WORDS;

const internals = {};


function App() {

  // let currentPersona = Personas.set.base;
  // 
  // const [persona,setPersona] = useState(Personas.set.base);
  // 
  // function speak(mode){
  //   switch (mode) {
  //     case MODES.trumpo:
  // 
  //       break;
  //     case MODES.pickles:
  // 
  //       break;
  //     default:
  // 
  //   }
  // }
  // 
  // function changePersona(per){
  //   setPersona(per);
  // }
  

  return (
    <>
    <div className="App">
      <ul className="djkfngkjdfng">
        <li>
          <DefinitionCard title={WORDS.set.computer.title}  />
        </li>
        <li>
          <DefinitionCard title={WORDS.set.bigdata.title}  />
        </li>
      </ul>
    </div>
    </>
  );
}

export default App;
