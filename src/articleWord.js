

// ArticleWord

import { useState } from 'react';
import DefinitionCard from './definitionCard.js';

export default function ArticleWord({title, definition, article}){
  
  // if (title === "computer") {
  //   debugger
  // }

  const basePersona = "original";
  const [persona,setPersona] = useState(basePersona);
  

  function changePersona(per){
    setPersona(per);
  }

  // this conditional look up alt definitions could be solved with
  // making the original data have a key as well and force a Type like a struct
  
  if (article && article.altDefinitions && article.altDefinitions.length > 0){
    
    let _definition = definition;
    
    if (persona !== basePersona) {
      article.altDefinitions.forEach((item, i) => {
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
          <span>Lens:</span>
          <button className="wwbuuuton" onClick={()=>changePersona(basePersona)} >Original</button>
          <button className="wwbuuuton" onClick={()=>changePersona(article.altDefinitions[0].persona)} >{article.altDefinitions[0].persona}</button>
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
