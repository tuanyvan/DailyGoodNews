import { Component } from "react";

class NewsForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="d-flex flex-column align-items-center justify-content-around" action="/api/submit-topic.js" method="post">
          <label className="mb-2" for="topic">Search for a news topic:</label>
          <input className="mb-2" type="text" id="topic" name="topic" />
          <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    );
  }
}

export default NewsForm;
