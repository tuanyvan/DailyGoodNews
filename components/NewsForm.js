import { useEffect, useState, Component } from "react";
import Article from "./Article";
import FormContent from "./FormContent";

class NewsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catalog: {},
      articleNumber: 0,
      form: (
        <FormContent submit={this.handleSubmission.bind(this)}></FormContent>
      ),
      previousInput: "",
    };
  }

  async handleSubmission(event) {
    event.preventDefault();

    if (event.target.topic.value == this.state.previousInput) {
      this.setState((state) => {
        return {
          form: (
            <FormContent submit={this.handleSubmission.bind(this)}>
              <p className="my-3">
                You cannot repeat the same search query more than once.
              </p>
            </FormContent>
          ),
        };
      });
      return null;
    }

    const data = {
      topic: event.target.topic.value,
    };

    const payload = JSON.stringify(data);

    const serverEndpoint = "/api/submit-topic";

    const parameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    };

    const requestArticle = await fetch(serverEndpoint, parameters);

    const articles = await requestArticle.json();

    if (articles.data.length != 0) {
      this.setState((state) => {
        return {
          catalog: articles.data,
          articleNumber: state.articleNumber + 1,
          form: (
            <div>
              <Article article={articles.data[state.articleNumber]} />
              <button
                className="btn btn-primary"
                onClick={this.nextArticle.bind(this)}
              >
                Next Article
              </button>
            </div>
          ),
        };
      });
    } else {
      this.setState((state) => {
        return {
          previousInput: data.topic,
          form: (
            <FormContent submit={this.handleSubmission.bind(this)}>
              <p className="my-3">
                Your search result returned no news articles.
              </p>
            </FormContent>
          ),
        };
      });
    }
  }

  async nextArticle() {
    if (this.state.articleNumber < this.state.catalog.length) {
      this.setState((state) => {
        return {
          articleNumber: state.articleNumber + 1,
          form: (
            <div key={state.articleNumber}>
              <Article article={state.catalog[state.articleNumber]} />
              <button
                className="btn btn-primary"
                onClick={this.nextArticle.bind(this)}
              >
                Next Article
              </button>
            </div>
          ),
        };
      });
    } else {
      this.setState((state) => {
        return {
          form: (
            <div key={state.articleNumber}>
              <p>That's all the articles for today.</p>
              <p>Would you like to search another topic?</p>
              <div>
                <button
                  className="btn btn-success"
                  onClick={() => window.location.reload(false)}
                >
                  Yes
                </button>
                <button
                  className="ms-2 btn btn-danger"
                  onClick={() =>
                    (window.location.href = "http://www.google.com")
                  }
                >
                  No, that's all for today.
                </button>
              </div>
            </div>
          ),
        };
      });
    }
  }

  render() {
    return <div>{this.state.form}</div>;
  }
  
}

export default NewsForm;
