
export default function DataInputs(props) {

  return (
    <>
    <form className="data-form" onSubmit={props.handleSubmit}>

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
