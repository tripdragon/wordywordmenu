
// import { Personas } from './personas.js';

/*

  A Word is unique, it belongs_to_many categories
  has_many definitions
  Each definition is_owned by a "persona"
  
  Persona is unique
  is associated to each words definition
  "could" have a dataset limit, like not educated to a vernacular in a field
  Example: Word > Category > Tech > "Resolution" < Persona "laymen" answer : "WUT?¿"

  var aa = WORDS.set.tacos.definition
  
*/

export const WORDS = {
  version : 0,
  cache1 : [],
  titles : {},
  set : {},
  add(word){
    this.cache1.push(word);
    this.titles[word.title.toLowerCase()] = word.title.toLowerCase();
    this.set[word.title.toLowerCase()] = word;
  }
};




// @title : string
// @definition : multiline string
// @categories : [string]
// @personas : [string]
class Word {
  
  // this is by the persona name for now
  //{ name { data } }
  altDefinitionsSet = {};
  
  constructor( { title, definition, categories, personas } ){
    this.title = title;
    this.definition = definition;
    this.categories = categories;
    // this.personas = personas; // Allowed list????
  }
  addAlt(alt){
    this.altDefinitionsSet[alt.persona.toLowerCase()] = alt;
  }
}

class AltDefinition{
  constructor( { persona, title, definition } ){
    this.persona = persona;
    this.title = title;
    this.definition = definition;
  }
}


let w1 = new Word({
  title:"Tacos", 
  definition: "Mexican Cooking. a tortilla filled with various ingredients, as beans, rice, chopped meat, cheese, and tomatoes, and folded over in half or rolled into a loose cylinder shape:",
  categories:["food", "nummy", "tacos!!!"]
  // personas:["base", "trump"]
});

w1.addAlt(new AltDefinition({
  persona: "trump",
  title: "tacos",
  definition: "Mexican hotdogs"
}));

WORDS.add(w1);
