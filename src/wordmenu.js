// 
// 
// export const wordmenu = {
//   foods: {
//     words: {
//       tacos : {
//         title: "tacos",
//         modes:{
//           base: {
//             body: "delicious!"
//           },
//           trumpo: {
//             body: " HAMBURDERS"
//           }
//         }
//       }
//     }
//   }
// }



export const WORDS = {
  version : 0,
  cache1 : []
};


// @title : string
// @definition : multiline string
// @categories : [string]
class Word {
  constructor({title,definition,categories}){
    this.title = title;
    this.definition = definition;
    this.categories = categories;
  }
}


WORDS.cache1.push(new Word({
  title:"Tacos", 
  definition: "Mexican Cooking. a tortilla filled with various ingredients, as beans, rice, chopped meat, cheese, and tomatoes, and folded over in half or rolled into a loose cylinder shape:",
  categories:["food", "nummy", "tacos!!!"]
}));
