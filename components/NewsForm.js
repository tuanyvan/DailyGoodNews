import { useEffect, useState, Component } from "react";
import Article from "./Article";

class NewsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            catalog: {},
            articleNumber: 0,
            form:
                <form 
                onSubmit={this.handleSubmission.bind(this)}
                // action="/api/submit-topic.js" 
                // method="post" 
                className="d-flex flex-column align-items-center justify-content-around">
                    <label className="mb-3 fs-2" htmlFor="topic">Search for a news topic:</label>
                    <input className="mb-2 col-10 text-center fs-4" type="text" id="topic" name="topic" required />
                    <button className="btn btn-primary col-10 fs-5" type="submit">Submit</button>
                </form>

        }
    }

    async handleSubmission(event) {
        event.preventDefault()
        this.state.form = <div></div>;

        const data = {
            topic: event.target.topic.value,
        }

        const payload = JSON.stringify(data);

        const serverEndpoint = '/api/submit-topic'

        const parameters = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: payload
        }

        const requestArticle = await fetch(serverEndpoint, parameters)

        const articles = await requestArticle.json()
        
        this.setState((state) => {
            return {
                catalog: articles,
                articleNumber: state.articleNumber + 1,
                form: 
                <div>
                    <Article article={articles.data[state.articleNumber]} />
                    <button
                    className="btn btn-primary"
                    onClick={this.nextArticle.bind(this)}>
                        Next Article    
                    </button>
                </div>
            }
        })
    }

    async nextArticle() {
        this.setState((state) => {
            return {
                articleNumber: state.articleNumber + 1,
                form: 
                    <div key={state.articleNumber}>
                        <Article article={state.catalog.data[state.articleNumber]} />
                        <button
                        className="btn btn-primary"
                        onClick={this.nextArticle.bind(this)}>
                            Next Article    
                        </button>
                    </div>
            }
        })
    }

    render() {
        return (
            <div>
                {this.state.form}
            </div>
        )
    }

}

export default NewsForm;
