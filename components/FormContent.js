import { Component } from "react";

class FormContent extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    return (
      <form
        onSubmit={this.props.submit}
        className="d-flex flex-column align-items-center justify-content-around"
      >
        <label className="mb-3 fs-2" htmlFor="topic">
          Search for a news topic:
        </label>
        <input
          className="mb-2 col-10 text-center fs-4"
          type="text"
          id="topic"
          name="topic"
          required
        />
        <button className="btn btn-primary col-10 fs-5" type="submit">
          Submit
        </button>
        {this.props.children}
      </form>
    );
  }

}

export default FormContent;
