
// App data

import {technology} from './databases/technology.js';
import {boardgames} from './databases/boardgames.js';
import {cooking} from './databases/cooking.js';

export const _o = {
  // technology : [
  //   {key:0,title: "Artificial Intelligence (AI)", definition: "The simulation of human intelligence in machines that are programmed to think and learn like humans."},
  //   {key:1,title: "Machine Learning", definition: "A subset of AI that enables computers to learn and improve from experience without being explicitly programmed."},
  //   {key:2,title: "Internet of Things (IoT)", definition: "The network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity to exchange data over the internet."},
  // ]
  // "tech jargon" : [
  
  currentEnsemble : [],
  
  categories : {}
}
// 
// _o.technology = technology;
// _o.boardgames = boardgames;
_o.categories.technology = technology;
_o.categories.boardgames = boardgames;
_o.categories.cooking = cooking;
