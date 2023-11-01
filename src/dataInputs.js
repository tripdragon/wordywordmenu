
import { useState } from 'react';




import { _o } from './appData.js';



export default function DataInputs() {
  
  let key = 4;
  
  
  const [tech, setTech] = useState(_o.technology);

  function handleSubmit(ev){
    ev.preventDefault();
    // debugger
    console.log("sdkjnfd", ev.target.title.value, ev.target.definition.value);
    _o.technology.push({key:key++,title:ev.target.title.value, definition:ev.target.definition.value})
    setTech([..._o.technology])
  }


  return (
    <>
    <form className="data-form" onSubmit={handleSubmit}>

      <label>
        title: <input name="title" />
      </label>
      <hr />
      <label>
        definition: <textarea name="definition" />
      </label>
      <input type="submit" value="Submit" />
      <hr />
    </form>
    {/*
    <form className="data-form" onSubmit={this.handleSubmit}>
      <label>
        Essay:
        <textarea value={this.state.value} onChange={this.handleChange} />
      </label>
    </form>
    */}
    </>
  );
}
