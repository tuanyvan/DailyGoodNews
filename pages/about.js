import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Paragraph from "../components/Paragraph";

import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function About() {
  return (
    <div>
      <Head>
        <title>Good News, Everyone | About</title>
        <meta
          name="description"
          content="Good News, Everyone is a news dashboard that brings you the positive side of the world."
        />
        <meta name="robots" content="noindex, nofollow"></meta>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
        </style>
      </Head>

      <Header />
      <main className="d-flex flex-column min-vh-100 p-5">
        <Paragraph title="What We Do">
          <p>
            <strong>Good News, Everyone</strong> is a server-rendered web application developed
            in Next.js, Node.js, and React. It implements NewsAPI.org's and Google Cloud Platform's HTTPS REST APIs.
          </p>
          <p>
            Through Google Cloud Platform's Vertex AI, we process news headlines
            from various websites and use a Single-label Text Classification
            AutoML model to determine if the news article would be negative,
            neutral, or positive in nature.
          </p>
          <p>
            We then use this text classification to show you the more positive
            news articles in your topic of interest.
          </p>
        </Paragraph>
        <Paragraph title="How It Works">
          <p>This web application makes use of NewsAPI.org's HTTPS REST API to request 20 articles in a user-provided topic. The article's headline is then labelled by the AutoML text classification model, determining if it's a positive news article. These actions are processed through a server-side API and delivered through Next.js' server-rendered framework.</p>
          <p>Once it determines which of the 20 articles is positive, it displays them to the user.</p>
        </Paragraph>
        <Paragraph title="Training the Model">
          <p>
            We used a dataset from Agarwal et al. as our starting point for the
            dataset. Through their research, we started off with a .csv file of
            300 news articles, each categorized as either positive, neutral,
            and negative.
          </p>
          <p>
            To expand the database, we made requests to NewsAPI to fetch
            headlines from various fields of interest. We then used a Python
            script to help automate data entry and labelling tasks. Through
            human labelled entries, we were able to grow the initial dataset to
            750+ categorically labelled news headlines.
          </p>
          <p>

          </p>
        </Paragraph>
        <Paragraph title="The Team">
          <p>This project was independently developed by Tuany Van for Major League Hacking's <em>Power Up Hacks</em> hackathon, created over 48 hours from March 18th to March 20th. <a href="https://github.com/tuanyvan/DailyGoodNews">The public repository for this project can be found here.</a></p>
        </Paragraph>
        <Paragraph title="Citations">
          <p>
            Agarwal, A., Mandal, A., Schaffeld, M., Ji, F., Zhang, J., Sun, Y.,
            & Aker, A. (2019).{" "}
            <cite>
              Good, Neutral or Bad-News Classification, NewsIR workshop at
              SIGIR2019
            </cite>
          </p>
        </Paragraph>
      </main>

      <Footer />
    </div>
  );
}
