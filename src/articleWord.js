

// ArticleWord

import { useState } from 'react';
import DefinitionCard from './definitionCard.js';

export default function ArticleWord({ title, definition, article, useToggle = false }) {
  
  // if (title === "computer") {
  //   debugger
  // }

  const basePersona = "original";
  const [persona,setPersona] = useState(basePersona);
  const [showAlt, setShowAlt] = useState(false);
  

  function changePersona(per){
    setPersona(per);
  }

  // this conditional look up alt definitions could be solved with
  // making the original data have a key as well and force a Type like a struct
  const altDefinition =
    (article && article.alternativeDefinition) ||
    (article && article.altDefinitions && article.altDefinitions[0]
      ? article.altDefinitions[0].definition
      : '');
  const altLabel =
    article && article.altDefinitions && article.altDefinitions[0]
      ? article.altDefinitions[0].persona
      : 'Alternative';
  const hasAltDefinition = Boolean(altDefinition);
  
  if (useToggle && hasAltDefinition) {
    const activeDefinition = showAlt ? altDefinition : definition;
    return (
      <article className="">
        <h3>{title}</h3>
        <p>{activeDefinition}</p>
        <div className="persona-article-nav">
          <button
            className="wwbuuuton ww-toggle"
            onClick={() => setShowAlt((prev) => !prev)}
          >
            {showAlt ? 'Original' : altLabel}
          </button>
        </div>
      </article>
    );
  }
  
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
