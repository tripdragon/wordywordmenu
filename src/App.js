import './fish.css';
import logo from './logo.svg';
import { useState } from 'react';

import './App.css';

import { WORDS } from './wordmenu.js';

import { shortDatabase } from './shortDatabase.js';





// import { Personas } from './personas.js';


import { DefinitionCard } from './definitionCard.js';
import DataInputs from './dataInputs.js';

import { _o } from './appData.js';
window._o = _o;

// import { styled } from 'styled-components';

window.wwwords = WORDS;

const internals = {};


// window.shortDatabase = shortDatabase;
// var key = _o.technology.length-1;
// var key = -1;

// for keys and then keep 
for (var i = 0; i < _o.technology.length; i++) {
  _o.technology[i].key = i;
}
let key = _o.technology[_o.technology.length-1].key;


function App() {
  
  // early figuring out what the schema is like
  // as .map is not avaialble in an object
  
  const [tech, setTech] = useState(_o.technology);
  
  function addArticle(ev){
    ev.preventDefault();
    // debugger
    key++;
    console.log("sdkjnfd", key, ev.target.title.value, ev.target.definition.value);
    _o.technology.push({key:key,title:ev.target.title.value, definition:ev.target.definition.value})
    // reverse here to debug with on top
    setTech([..._o.technology].reverse())
  }

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
  
  
  function ArticleWord({title, definition}){
    return(
      <article className="">
        <h3>{title}</h3>
        <p>{definition}</p>
      </article>
    );
  }

  return (
    <>

    <div className="App">
    
    <DataInputs handleSubmit={(ev) => addArticle(ev) } />
    
    
    
    <section>
      <h2>Technology</h2>
{/*      
      <article class="">
        <h3>Artificial Intelligence (AI)</h3>
        <p>The simulation of human intelligence in machines that are programmed to think and learn like humans.</p>
      </article>
      
      <article class="">
        <h3>Machine Learning</h3>
        <p>A subset of AI that enables computers to learn and improve from experience without being explicitly programmed.</p>
      </article>
      // ArticleWord(x.title, x.definition);
      */}
      
    {/*   
      {
        shortDatabase.categories.technology.map((x)=>
          <ArticleWord key={x.title} title={x.title} definition={x.definition} />
        )
        
      }
        */}
      
      
      
      

        {
          
          tech.map((x)=>
            <ArticleWord key={x.key} title={x.title} definition={x.definition} />
          )
          
        }
    </section>
    
    
    
    
    {/*
      <BuildList />
    
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
