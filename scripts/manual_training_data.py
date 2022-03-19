import requests
import csv
from dotenv import load_dotenv
import os

load_dotenv()

API_KEY = os.getenv('API_KEY')
CSV = os.getenv('CSV')

## Get request from NewsAPI of many articles
topic = input('topic:')
request = requests.get(f'https://newsapi.org/v2/everything?q={topic}&apiKey={API_KEY}')
articles = request.json()['articles']

## Get only the headlines from each article
headlines = [x['title'] for x in articles]
print(f'{len(headlines)} headlines found.')

## Iterate over the list of every headline
for headline in headlines:
    print(headline)
## Determine p=positive, n=negative, neutral for all other user input
    user_input = input()

    if user_input in ('p', 'n'):
        if user_input == 'p':
            sentiment = 'positive'
        else:
            sentiment = 'negative'
    else:
        sentiment = 'neutral'
    
## Append results to .csv
    if user_input != 'q':
        with open(CSV, 'a', newline='') as td_file:
            td_writer = csv.writer(td_file)
            td_writer.writerow([headline, sentiment])
            td_file.close()
