import { Component } from "react";
import moment from "moment";

class Article extends Component {
  constructor(props) {
    super(props);

    this.source = this.props.article.source.name
    this.image = this.props.article.urlToImage
    this.title = this.props.article.title
    this.author = this.props.article.author
    this.url = this.props.article.url
    this.content = this.props.article.content
    // this.publishedAt = this.props.article.publishedAt
    this.publishedAt = moment(new Date(this.props.article.publishedAt)).format('MMMM Do YYYY')
  }

  render() {
    return (
        <article>
            <img className="img-fluid" src={this.image} alt={this.title} />
            <a href={this.url}><h2>{this.title}</h2></a>
            <h3>{this.author} | {this.source}</h3>
            <h4>{this.publishedAt}</h4>
            <p>An interesting sneak peek of the article:</p>
            <p>{this.content}</p>
        </article>
    );
  }
}

export default Article;
