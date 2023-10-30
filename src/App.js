import './fish.css';
import logo from './logo.svg';
import { useState } from 'react';

import './App.css';

import { WORDS } from './wordmenu.js';



import { Personas } from './personas.js';


// import { styled } from 'styled-components';

window.wwwords = WORDS;

const internals = {};


function App() {

  let currentPersona = Personas.set.base;

  const [persona,setPersona] = useState(Personas.set.base);
  
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
  
  function changePersona(per){
    setPersona(per);
  }
  

  return (
    <>
    <div className="App">
      <ul className="djkfngkjdfng">
        <li>
          <button className="buuuton" id="mmm" onClick={()=>changePersona(Personas.set.person)} >Person Lens</button>
          <div>   
            <h2>{WORDS.set.computer.title}</h2>
              { persona === Personas.set.base && 
                <p>{WORDS.set.computer.definition}</p>
              }
              { persona === Personas.set.person && 
                <p>{WORDS.set.computer.altDefinitionsSet.person.definition}</p>
              }
          </div>
          
          {/*
            
            // <h2>{ksjdnflsd === "owowo" ?msdknf:sdknfds}</h2>
          */}
          <strong>I am a robo bot</strong>
        </li>
      </ul>
    </div>
    </>
  );
}

export default App;
