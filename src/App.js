import './fish.css';
import logo from './logo.svg';
import { useState } from 'react';

import './App.scss';

import { WORDS } from './wordmenu.js';

import { shortDatabase } from './shortDatabase.js';
import ArticleWord from './articleWord.js';
import SearchInput from './searchInput.js';





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
buildKeys(_o.categories.technology);
let key_tech = _o.categories.technology[_o.categories.technology.length-1].key;


buildKeys(_o.categories.boardgames);
let key_boardgames = _o.categories.boardgames[_o.categories.boardgames.length-1].key;



// for keys and then keep 
// for (var i = 0; i < _o.technology.length; i++) {
//   _o.technology[i].key = i;
// }
// let key = _o.technology[_o.technology.length-1].key;



function App() {
  
  // early figuring out what the schema is like
  // as .map is not avaialble in an object
  
  _o.currentEnsemble = [];
  _o.currentEnsemble.push({cat:"technology", dats:_o.categories.technology});
  _o.currentEnsemble.push({cat:"boardgames", dats:_o.categories.boardgames});
  
  
  
  var tempSearchArray = [];
  
  
  const [tech, setTech] = useState(_o.categories.technology);
  
  const [boardgames, setBoardgames] = useState(_o.categories.boardgames);
  
  const [ensemble, setEnsemble] = useState(_o.currentEnsemble);
  
  
  
  
  function addArticle(ev){
    ev.preventDefault();
    
    key_tech++;
    console.log("sdkjnfd", key_tech, ev.target.title.value, ev.target.definition.value);
    _o.technology.push({key:key_tech,title:ev.target.title.value, definition:ev.target.definition.value})
    // reverse here to debug with on top
    setTech([..._o.technology].reverse())
  }
  
  
  // BAaaaasic search feature
  // document.addEventListener( "search", (ev) => {
  // 
  //     console.log("eeev", ev.detail);
  // 
  //     let query = ev.detail;
  //     tempSearchArray = _o.currentEnsemble.filter( (x) => {
  //       return x.cat.toLowerCase().includes(query.toLowerCase())
  //     })
  //     setEnsemble(tempSearchArray)
  // 
  //   },
  //   true,
  // );
  
  document.addEventListener( "searchclear", (ev) => {
      setEnsemble(_o.currentEnsemble)
    },
    true,
  );
  
  document.addEventListener( "search", (ev) => {
    
      console.log("eeev", ev.detail);
      
      
      tempSearchArray = [];
      let query = ev.detail;
      
      _o.currentEnsemble.forEach((item, i) => {
        // console.log(item);
        var base = {cat:null, dats: [] }; // change this to a class
        var secondary = [];
        
        if (item.cat.toLowerCase().includes(query.toLowerCase()) ) {
          base = item;
        }
        else {
          secondary = item.dats.filter( (x) => {
            return x.title.toLowerCase().includes(query.toLowerCase())
          })
        }
        
        if(base.cat === null && secondary.length > 0){
          base.cat = item.cat;
          base.dats = secondary;
        }
        
        if(base.cat !== null){
          tempSearchArray.push(base)
        }
        
      });
      
      setEnsemble(tempSearchArray);
      
      
      
    },
    true,
  );
  

  
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

    <div className="App" id="approot">
    
    <SearchInput id="searchbox2" />
    
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
    
    <div className="groups">
      
      
      {/*
        <DataInputs handleSubmit={(ev) => addArticle(ev) } />
        
        <h2>Technology</h2>
        { tech.map( (x) => <ArticleWord key={x.key} title={x.title} definition={x.definition} article={x} /> ) }
        
        
        <h2>Board Games</h2>
        { boardgames.map( (x) => <ArticleWord key={x.key} title={x.title} definition={x.definition} article={x} /> ) }
        
        
        */}

        { 
          // debugger
          ensemble.map( (x) => 
            <section className="category">
              <h2 key={x.cat}>{x.cat}</h2>
              {x.dats.map( (yy) =>
                <ArticleWord key={yy.key} title={yy.title} definition={yy.definition} article={yy} />
              )}
            </section>
          )
          
        }
        

      
      
      {/*
        
        <section className="category" id="_t">
        <h2>Board Games</h2>
        { boardgames.map( (x) => <ArticleWord key={x.key} title={x.title} definition={x.definition} article={x} /> ) }
        </section>
        
        */}
      
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
