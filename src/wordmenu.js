
// import { Personas } from './personas.js';

/*

  ~A Word is unique, it belongs_to_many categories~
  has_many definitions
  Each definition is_owned by a "persona"
  
  INCORRECT: Each Category has a unique meaning to a word
  Need to rethink the database again.
  
  Persona is unique
  is associated to each words definition
  "could" have a dataset limit, like not educated to a vernacular in a field
  Example: Word > Category > Tech > "Resolution" < Persona "laymen" answer : "WUT?¿"

  var aa = WORDS.set.tacos.definition
  
  For now our database will be a simple bunch of JS objects instead of sql
  
  Some start definitions taken from https://www.dictionary.com/
  
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


// let w1 = new Word({
//   title:"Tacos", 
//   definition: "Mexican Cooking. a tortilla filled with various ingredients, as beans, rice, chopped meat, cheese, and tomatoes, and folded over in half or rolled into a loose cylinder shape:",
//   categories:["food", "nummy", "tacos!!!"]
//   // personas:["base", "trump"]
// });
// 
// w1.addAlt(new AltDefinition({
//   persona: "trump",
//   title: "tacos",
//   definition: "Mexican hotdogs"
// }));
// 
// WORDS.add(w1);

let w1 = new Word({
  title:"computer", 
  definition: "A programmable electronic device designed to accept data, perform prescribed mathematical and logical operations at high speed, and display the results of these operations. Mainframes, desktop and laptop computers, tablets, and smartphones are some of the different types of computers.",
  categories:["tech"]
  // personas:["base", "trump"]
});

w1.addAlt(new AltDefinition({
  persona: "person",
  title: "computer",
  definition: "An expenssive nessesary device that does a bad job at finding the email you know you just read."
}));

WORDS.add(w1);
