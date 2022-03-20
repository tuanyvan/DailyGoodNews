export default function handler(req, res) {
  const body = req.body;

  if (!body.topic) {
    return res
      .status(400)
      .json({ data: "Field `topic` not found in payload." });
  }

  const axios = require("axios");
  const NEWS_API_KEY = process.env.NEWS_API_KEY;

  let response = axios
    .get(
      `https://newsapi.org/v2/everything?q=${body.topic}&apiKey=${NEWS_API_KEY}`
    )
    .then((result) => {
      response = result.data.articles;
      Promise.all
        (response.map((article, index) => {
          return new Promise((resolve, reject) => {
            return resolve( 
              getTextPrediction(
                article.title,
                process.env.ENDPOINT_ID,
                process.env.PROJECT_ID,
                process.env.PROJECT_LOCATION,
                article
              )
        )}
      )}))
      .then(values => res.status(200).json({ data: values.filter(item => item[0].confidences[2] > 0.8).map(item => item[1]) }))
      }
    )
    .catch((err) => console.log(err));
}

async function getTextPrediction(text, endpointId, project, location, article) {
  const aiplatform = require("@google-cloud/aiplatform");
  const { instance, prediction } =
    aiplatform.protos.google.cloud.aiplatform.v1.schema.predict;

  // Imports the Google Cloud Model Service Client library
  const { PredictionServiceClient } = aiplatform.v1;

  // Specifies the location of the api endpoint
  const clientOptions = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
  };

  // Instantiates a client
  const predictionServiceClient = new PredictionServiceClient(clientOptions);

  async function predictTextClassification() {
    // Configure the resources
    const endpoint = `projects/${project}/locations/${location}/endpoints/${endpointId}`;

    const predictionInstance =
      new instance.TextClassificationPredictionInstance({
        content: text,
      });
    const instanceValue = predictionInstance.toValue();

    const instances = [instanceValue];
    const request = {
      endpoint,
      instances,
    };

    const [response] = await predictionServiceClient.predict(request);

    for (const predictionResultValue of response.predictions) {
      const predictionResult =
        prediction.ClassificationPredictionResult.fromValue(
          predictionResultValue
        );

      return [predictionResult, article];
    }
  }
  return predictTextClassification();
}
