export default function handler(req, res) {

    const body = req.body

    if (!body.topic) {
      return res.status(400).json({ data: 'Field `topic` not found in payload.' })
    }

    const axios = require('axios')
    const NEWS_API_KEY = process.env.NEWS_API_KEY
    
    axios.get(`https://newsapi.org/v2/everything?q=${body.topic}&apiKey=${NEWS_API_KEY}`)
    .then(result => {
        res.status(200).json({ data: result.data.articles })
      }
    )
    .catch(err => console.log(err))

}
