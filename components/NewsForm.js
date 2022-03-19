import { useState } from "react";

export default function NewsForm() {

    const handleSubmission = async (event) => {
        event.preventDefault()
        setForm(<div></div>);

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

        const articles = await requestArticle.json();

        // For now, just return the first article.
        setForm(<p>{articles.data[0].title}</p>)

    }

    const [form, setForm] = useState(
        <form 
            onSubmit={handleSubmission}
            // action="/api/submit-topic.js" 
            // method="post" 
            className="d-flex flex-column align-items-center justify-content-around">
            <h2 className="mb-3">Search for a news topic:</h2>
            <label className="d-none" htmlFor="topic">Search for a news topic:</label>
            <input className="mb-2 col-10" type="text" id="topic" name="topic" required />
            <button className="btn btn-primary col-10 fs-5" type="submit">Submit</button>
        </form>
    );

    return (
        <div>
            {form}
        </div>
    );

}
