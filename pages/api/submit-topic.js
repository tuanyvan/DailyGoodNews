export default function handler(req, res) {

    const body = req.body
  
    console.log('body: ', body)

    if (!body.topic) {
      return res.status(400).json({ data: 'Field `topic` not found in payload.' })
    }

    res.status(200).json({ data: `${body.topic}` })
  }
