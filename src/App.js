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
  const ksjdnflsd = "narf";
  const msdknf = "mwmwmmw";
  const sdknfds = "4444";

  let currentPersona = Personas.set.base;

  
  const MODES = {
    trumpo : "trumpo" , pickles : "pickles", base : "base"
  }
  
  const [modes,setModes] = useState(MODES.base);
  
  const [personas,setPersonas] = useState(Personas.set.base);
  
  function speak(mode){
    switch (mode) {
      case MODES.trumpo:
          
        break;
      case MODES.pickles:
        
        break;
      default:
        
    }
  }
  
  function sdkjfsd(){
    // setModes(MODES.trumpo);
    setPersonas(Personas.set.trump);
  }
  
  
  function getMeDatas(mode, word) {
    // switch (mode) {
    //   case MODES.trumpo:
    // 
    //     break;
    //   case MODES.pickles:
    // 
    //     break;
    //   default:
    // 
    // }
    // wordmenu.foods.words.tacos.modes.base.body
  }

  return (
    <>
    <div className="App">
      <ul className="djkfngkjdfng">
        <li>
          <button className="buuuton" id="mmm" onClick={()=>sdkjfsd()} > SAY TRUMP!!!</button>
          <div>   
            <h2>{WORDS.set.tacos.title}</h2>   
          
            { personas === Personas.set.base && 
              <p>{WORDS.set.tacos.definition}</p>
            }
            { personas === Personas.set.trump && 
              <p>{WORDS.set.tacos.altDefinitionsSet.trump.definition}</p>
            }
          
          
          
          </div>
          
          {/*
            
            // <h2>{ksjdnflsd === "owowo" ?msdknf:sdknfds}</h2>
          */}
          <strong>I am a turkey bot</strong>
        </li>
      </ul>
    </div>
    </>
  );
}

export default App;
