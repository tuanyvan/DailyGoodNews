import { Component } from "react";

class Paragraph extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="paragraph">
        <h2>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}

export default Paragraph;
