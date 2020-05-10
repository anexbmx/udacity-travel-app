# Project FEND Capstone - Travel App

Build a travel app, combining all of your Front End skills into an amazing capstone project for your portfolio. Utilize multiple APIs to present a user with all they need to know about their trip..

## Run Project

1. Download or clone the project:
```
git clone https://github.com/anexbmx/udacity-travel-app.git [folder_name]
```
2. Install dependencies
```
npm i
```
3. Start the server
```
npm start
```
4. Setup the environment development or production
```
npm run build-dev
```
or 
```
npm run build-prod
```
5. Test with Jest
```
npm run test
```

## API(s) Used

* [Geonames API](http://www.geonames.org/export/web-services.html) - Geographical database
* [Weatherbit API](https://www.weatherbit.io/api) - Weather API 
* [Pixabay API](https://pixabay.com/api/docs/) - Pixabay's API for searching and retrieving free images and videos


## Extend Options

1. Add end date and display length of the trip
2. Pull in an image for the country from Pixabay API when the entered location brings up no results (good for obscure localities).
3. Integrate the REST Countries API to pull in data for the country being visited.
4. Instead of just pulling a single day forecast, pull the forecast for multiple days.
5. Incorporate icons into forecast.


## Setup

`cd` into project and run:
- `npm install`
- we need an API key & APP id, go To [here](https://developer.aylien.com/signup) Signing up will get you an API key and APP id
- Fill the `.env` file with your API keys like this:
```
  API_ID=**************************
  API_KEY=**************************

```


## Run Project
* Dev mode
  * ``` npm run build-dev ``` start webpack dev server at port 8081
  * ``` npm run start ```  start a server at port 8080 , to use our api

* Prod mode
  * ``` npm run build-prod ```  to generates the dist files 
  * ``` npm run start ```  start a server at port 8080

## Offline Functionality
The project have service workers set up in webpack.

