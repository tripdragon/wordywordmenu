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
  
  // early figuring out what the schema is like
  // as .map is not avaialble in an object
  
  function BuildList(){
    // const gg = WORDS.set.map( x =>{
    const gg = [];
    Object.keys(WORDS.set).forEach(key => {
      const title = WORDS.set[key].title;
      gg.push(
      <li key={title} >
        <DefinitionCard title={title}  />
      </li>
      );
    });
    
    return <ul className="djkfngkjdfng">{gg}</ul>;
  }

  return (
    <>
    <div className="App">
    
    <BuildList />
    
    {/*
    
      <ul className="djkfngkjdfng">
        <li>
          <DefinitionCard title={WORDS.set.computer.title}  />
        </li>
        <li>
          <DefinitionCard title={WORDS.set.bigdata.title}  />
        </li>
      </ul>
    */}
    </div>
    </>
  );
}

export default App;
