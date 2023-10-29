import './fish.css';
import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { wordmenu } from './wordmenu';

// import { styled } from 'styled-components';

const internals = {};


function App() {
  const ksjdnflsd = "narf";
  const msdknf = "mwmwmmw";
  const sdknfds = "4444";

  
  const MODES = {
    trumpo : "trumpo" , pickles : "pickles", base : "base"
  }
  
  const [modes,setModes] = useState(MODES.base);
  
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
    setModes(MODES.trumpo);
  }
  
  
  function getMeDatas(mode, word) {
    switch (mode) {
      case MODES.trumpo:
          
        break;
      case MODES.pickles:
        
        break;
      default:
        
    }
    wordmenu.foods.words.tacos.modes.base.body
  }
  
  // <style>
  // .aaa{
  //   padding: 200px;
  // 
  // }
  // </style>
  // 
  return (
    <>
    <div className="App">
      <ul className="djkfngkjdfng">
        <li >
          <button className="buuuton" id="mmm" onClick={()=>sdkjfsd()} > SAY TRUMP!!!</button>
          <div>   
          <h2>{wordmenu.foods.words.tacos.title}</h2>       
          { modes === MODES.base && 
            <p>{wordmenu.foods.words.tacos.modes.base.body}</p>
          }
          { modes === MODES.trumpo && 
            <p>{wordmenu.foods.words.tacos.modes.trumpo.body}</p>
          }
          </div>
          
          <h2>{ksjdnflsd === "owowo" ?msdknf:sdknfds}</h2>
          <p>I am a turkey bot</p>
        </li>
      </ul>
    </div>
    </>
  );
}

export default App;
