import './fish.css';
import logo from './logo.svg';
import { useState } from 'react';

import './App.css';

import { WORDS } from './wordmenu.js';

import { shortDatabase } from './shortDatabase.js';
import ArticleWord from './articleWord.js';





// import { Personas } from './personas.js';


import { DefinitionCard } from './definitionCard.js';
import DataInputs from './dataInputs.js';

import { _o } from './appData.js';
window._o = _o;

// import { styled } from 'styled-components';

// window.wwwords = WORDS;

// const internals = {};


// window.shortDatabase = shortDatabase;


function buildKeys(data){
  // for keys and then keep 
  for (var i = 0; i < data.length; i++) {
    data[i].key = i;
  }
}
buildKeys(_o.technology);
let key_tech = _o.technology[_o.technology.length-1].key;


buildKeys(_o.boardgames);
let key_boardgames = _o.boardgames[_o.boardgames.length-1].key;



// for keys and then keep 
// for (var i = 0; i < _o.technology.length; i++) {
//   _o.technology[i].key = i;
// }
// let key = _o.technology[_o.technology.length-1].key;



function App() {
  
  // early figuring out what the schema is like
  // as .map is not avaialble in an object
  
  const [tech, setTech] = useState(_o.technology);
  
  const [boardgames, setBoardgames] = useState(_o.boardgames);
  
  function addArticle(ev){
    ev.preventDefault();
    // debugger
    key_tech++;
    console.log("sdkjnfd", key_tech, ev.target.title.value, ev.target.definition.value);
    _o.technology.push({key:key_tech,title:ev.target.title.value, definition:ev.target.definition.value})
    // reverse here to debug with on top
    setTech([..._o.technology].reverse())
  }
  
  
  // 
  // function BuildList(){
  //   // const gg = WORDS.set.map( x =>{
  //   const gg = [];
  //   Object.keys(WORDS.set).forEach(key => {
  //     const title = WORDS.set[key].title;
  //     gg.push(
  //     <li key={title} >
  //       <DefinitionCard title={title}  />
  //     </li>
  //     );
  //   });
  // 
  //   return <ul className="djkfngkjdfng">{gg}</ul>;
  // }
  // 
  // 

  return (
    <>

    <div className="App">
    
    <div id="opening-text">
      <h1>Word Menu NEW NEW!! </h1>
      <p>Writing a paper? Need a word? Dictionary and Thesaurus not really feeling fresh and take a bit too much time to dig through? Behold <strong>WordMenu!!!</strong></p>
      <p>Inspired by the long out of print <em>Random House Word Menu</em>. This project seeks to revive and upgrade the concept by offering alternative narations giving you a peek into the worlds vinacular.</p>
      <p>Simply pick or search a category and read though relevant words with short definitions. If available select a <strong>Lens</strong> option to view alternative definitions.</p>
    </div>
    
    <nav id="alphabet-nav">
      <button className="" link="_t">a</button>
      <button className="">b</button>
    </nav>
    
    <div class="groups">
      <section className="category">
      
      {/*
        <DataInputs handleSubmit={(ev) => addArticle(ev) } />
        */}
      
        <h2>Technology</h2>
        { tech.map( (x) => <ArticleWord key={x.key} title={x.title} definition={x.definition} article={x} /> ) }
      </section>
      
      
      <section className="category" id="_t">
        <h2>Board Games</h2>
        { boardgames.map( (x) => <ArticleWord key={x.key} title={x.title} definition={x.definition} article={x} /> ) }
      </section>
      
      
    </div>
    
    
    
    
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
