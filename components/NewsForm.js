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

        const article = await requestArticle.json();

        setForm(article.data)

    }

    const [form, setForm] = useState(
        <form 
            onSubmit={handleSubmission}
            // action="/api/submit-topic.js" 
            // method="post" 
            className="d-flex flex-column align-items-center justify-content-around">
            <label className="mb-2" htmlFor="topic">Search for a news topic:</label>
            <input className="mb-2" type="text" id="topic" name="topic" required />
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
    );

    return (
        <div>
            {form}
        </div>
    );

}
