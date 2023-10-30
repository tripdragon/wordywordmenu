// import './fish.css';

import { useState } from 'react';
// import React, { Component } from 'react';

import { WORDS } from './wordmenu.js';

import { Personas } from './personas.js';



export function DefinitionCard({title}){
  
  let currentPersona = Personas.set.base;
  
  const [persona,setPersona] = useState(Personas.set.base);


  
  function changePersona(per){
    setPersona(per);
  }


  return(
    <>
    <div>   
      <h2>{title}</h2>
        { persona === Personas.set.base && 
          <p>{WORDS.set[title.toLowerCase()].definition}</p>
        }
        { persona === Personas.set.person && 
          <p>{WORDS.set[title.toLowerCase()].altDefinitionsSet.person.definition}</p>
        }
        <strong>I am a robo bot</strong>
    </div>
    
    {/*
      
      // <h2>{ksjdnflsd === "owowo" ?msdknf:sdknfds}</h2>
    */}
    <button className="buuuton" id="mmm" onClick={()=>changePersona(Personas.set.person)} >Person Lens</button>
    </>
  )
}
