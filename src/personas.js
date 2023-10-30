

export const Personas = {
  set : {},
  add(_p){
    this.set[_p.name] = _p;
  }
}


class Persona{
  constructor({ name }){
    this.name = name;
  }
}


// function changePersona(per){
//   setPersona(per);
// }

Personas.add({name: "base"});
Personas.add({name: "trump"});
Personas.add({name: "nerd"});
Personas.add({name: "technical"});
Personas.add({name: "person"});
