## Live Deployment
The live deployment for this website will be up on [http://goodnewseveryone.tech/](http://goodnewseveryone.tech/).

## Inspiration
Power Up Hacks' Google Cloud Platform theme made me very interested in participating. I have used its Google Productivity tools APIs before to create a deadline-keeping Discord bot with my university peers. However, I never played around with its ML training tools and took it as an opportunity to try something new.

## What it does
"Good News, Everyone" is a Next.js server-rendered web application which takes 20 articles from NewsAPI.org based on a user topic, runs their headlines through a trained AutoML text classification model, and provides the user with the more positive articles.

## How we built it
This was developed locally using the Next.js library, taking advantage of React components and state to reduce web development time. Bootstrap was also used to shorten the time required for CSS styling and web responsiveness.

For the machine learning model, I used a dataset from Agarwal et al. as a starting point. Through their research, I started off with a .csv file of 300 news articles, each categorized as either positive, neutral, and negative. From there, I created a Python script that would retrieve headlines from NewsAPI and I would manually label entries to expand the training data.

I eventually got the training data to about 750+ different headlines, which I fed through the Google Cloud Platform AutoML to generate a single-label categorization model. This was used to filter the news articles based on positivity.

The site was deployed to Domain.com using a Google virtual machine.

## Challenges we ran into
I ran a few hitches with React and its asynchronous state hooks. When trying to cycle through the fetched list of news articles, the application would not update the `useState()` values correctly. It showed up as correct on the rendered component, but not inside its functions. I ended up solving this by changing from a React function to a React class component, which I am more comfortable with.

The Google ML model took a very long time to train, and as I'm typing this up now it is still training the other few models I queued up. You would not believe how happy I was when I saw my model finish training!

I made the initial mistake of using the "Natural Language" API, which is a legacy service and has been training my first queued model for 12 hours now.

## Accomplishments that we're proud of
I'm proud of everything in this project: it culminates everything I know about React.js, frontend web development, Python scripting, using REST APIs, and experimenting with Google Cloud Platform.

I am however most proud of my AutoML model and the training data I made for it. I assembled and appended to the dataset for using a Python scripting. I trained my best ML model for the better part of four hours and did it by only reading the documentation.

## What we learned
I learned so much in this project. React.js' state handling is something I struggled with when I was younger and learning React Native. But now that I am a little older, I have a better understanding of state hooks and their behavior when changes are made in functional components. I also furthered my understanding of React class component programming through this experience, and I plan on using this experience on my portfolio website to give it a little more pizzazz.

I am now more familiar with the Google Cloud Platform, which is an imperative experience. My job search has been focused on IT and Cloud Engineering positions, and having a thorough understanding of logging, financial monitoring, billing reports, resource management, geolocation of services, and creating ML models with CSPs is very important to me.

## What's next for Good News, Everyone!
I would definitely work on improving the training data for my ML model. It's far from perfect finding positive articles. In my dashboard, I can see that it _NAILED_ the true positives from my training data (which was automatically categorized into testing/evaluation data by Vertex AI), but its false positives shows me I could invest a little more time adding to the training data and improving the model.

I think I might work on adding more styling to the website, such as animations, but given what I have done through Bootstrap, I find that it is great work for a 48 hour project.

## Citations
Agarwal, A., Mandal, A., Schaffeld, M., Ji, F., Zhang, J., Sun, Y., & Aker, A. (2019). Good, Neutral or Bad-News Classification, NewsIR workshop at SIGIR2019
