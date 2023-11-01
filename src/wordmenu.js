
// import { Personas } from './personas.js';
import { CATEGORIES } from './categories.js';

/*

  Try 2
  
  Word is unique to a category
  Category is Unique, has_many words
  In each Category a word has one base definition and many other persona definitions
  
  OR
  
  Word is unique
  Category is Unique
  Word retains all data but some data might get lost if categories change name or replaced
  So thats not a good system
  
  We would also have sub sections or Topics
  
  So
  Topic : Tech
    » Subjects : .coms, amazon, shopping, AR, 
      » SubTopic ....
      

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
  
  constructor( { title, prettyTitle, definition, categories, personas } ){
    this.title = title;
    this.prettyTitle = prettyTitle;
    this.definition = definition;
    this.categories = categories;
    // this.personas = personas; // Allowed list????
  }
  addAlt(alt){
    this.altDefinitionsSet[alt.persona.toLowerCase()] = alt;
  }
}

class AltDefinition{
  constructor( { persona, title, prettyTitle, definition } ){
    this.persona = persona;
    this.title = title;
    this.prettyTitle = prettyTitle;
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
  definition: "An expensive necessary device that does a bad job at finding the email you know you just read."
}));

WORDS.add(w1);



{
let w1 = new Word({
  title:"BigData", 
  prettyTitle: "Big Data",
  definition: "Large and complex data sets that cannot be easily managed or processed using traditional data processing applications.",
  categories:["tech"]
  // personas:["base", "trump"]
});

w1.addAlt(new AltDefinition({
  persona: "person",
  title: "BigData",
  prettyTitle: "Big Data",
  definition: "That like Big brother? Get out of here"
}));

WORDS.add(w1);
// debugger

}
