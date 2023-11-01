

// ArticleWord

import { useState } from 'react';
import DefinitionCard from './definitionCard.js';

export default function ArticleWord({title, definition, article}){
  
  
  // let currentPersona = "original";
  // 
  
  const basePersona = "original";
  const [persona,setPersona] = useState(basePersona);
  
  // 
  // 
  // 
  function changePersona(per){
    setPersona(per);
  }

  
  if (article && article.altDefinitions && article.altDefinitions.length > 0){
    
    let _definition = definition;
    
    if (persona !== basePersona) {
      // debugger
      article.altDefinitions.forEach((item, i) => {
        // debugger
        if (item.persona === persona) {
          _definition = item.definition;
        }
      });
    }
    
    
    return(
      <article className="">
        <h3>{title}</h3>
        
        <p>{_definition}</p>

        <div className="persona-article-nav">
          <button className="wwbuuuton" id="mmm" onClick={()=>changePersona(basePersona)} >Original</button>
          <button className="wwbuuuton" id="mmm" onClick={()=>changePersona(article.altDefinitions[0].persona)} >{article.altDefinitions[0].persona}</button>
        </div>
      </article>
    );
  }
  
  return(
    <article className="">
      <h3>{title}</h3>
      <p>{definition}</p>
    </article>
  );
}
