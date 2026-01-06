
// App data

import {technology} from './databases/technology.js';
import {boardgames} from './databases/boardgames.js';
import {cooking} from './databases/cooking.js';

// these are AI generate
import {business} from './databases/business.js';
import {culture} from './databases/culture.js';
import {design} from './databases/design.js';
import {education} from './databases/education.js';
import {environment} from './databases/environment.js';
import {finance} from './databases/finance.js';
import {health} from './databases/health.js';
import {philosophy} from './databases/philosophy.js';
import {psychology} from './databases/psychology.js';
import {science} from './databases/science.js';
import {history} from './databases/history.js';
import {arts} from './databases/arts.js';

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

// these are AI generate
_o.categories.business = business;
_o.categories.culture = culture;
_o.categories.design = design;
_o.categories.education = education;
_o.categories.environment = environment;
_o.categories.finance = finance;
_o.categories.health = health;
_o.categories.philosophy = philosophy;
_o.categories.psychology = psychology;
_o.categories.science = science;
_o.categories.history = history;
_o.categories.arts = arts;
