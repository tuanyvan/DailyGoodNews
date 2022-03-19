import { Component } from "react";
import moment from "moment";

class Article extends Component {
  constructor(props) {
    super(props);

    this.source = this.props.article.source.name;
    this.image = this.props.article.urlToImage;
    this.title = this.props.article.title;
    this.author = this.props.article.author;
    this.url = this.props.article.url;
    this.content = this.props.article.content.substr(
      0,
      this.props.article.content.indexOf("…") + 1
    );
    this.publishedAt = moment(new Date(this.props.article.publishedAt)).format(
      "MMMM Do YYYY"
    );
  }

  render() {
    return (
      <article>
        <img
          className="img-fluid min-h-100"
          src={this.image}
          alt={this.title}
        />
        <div className="mt-4">
          <a className="text-decoration-none" href={this.url} target="_blank">
            <h2>{this.title}</h2>
          </a>
          <h3 className="mt-2">
            {this.author} | {this.source}
          </h3>
          <h4>{this.publishedAt}</h4>
        </div>
        <p>{this.content}</p>
      </article>
    );
  }
}

export default Article;
