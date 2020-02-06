# Daylight

Shows the current sunset and sunrise times for the selected location.

Visit [https://day-light.netlify.com/](https://day-light.netlify.com/) to view the app.

## What is your motivation for creating this project?

The changing length of days and nights depends on the location and season of the year. It would be nice to know how many hours of daylight we have at a certain location.

## How will users interact with your web site?

The user enters the city or country name in the search field and receives the current sunset and sunrise times for that location

## What 3rd Party API(s) will you integrate with?

- [GeoNames](http://www.geonames.org/export/web-services.html)
  - To discover the latitude and longitude of the location
  - To get a sunrise & sunset times from long/lat.

## Tech Stack

- [Bulma](https://bulma.io/) CSS framework.

## Will you try to implement any stretch features?

- I'll use [Webpack](https://webpack.js.org/) to bundle modules.

## What will be your process?

- I will submit commit when a feature is added, or a task is accomplished.
- I'll test the website manually, and I'll use Jest framework to write a unit tests.
- I will use [wireframe.cc](https://wireframe.cc) to design a layout.
- It will be deployed on [Netlify](https://www.netlify.com/)

## How to run this project on the local machine?

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) installed before running this project locally. Also, you have to sign up for [GeoNames free](http://www.geonames.org/login) account, to use their web API.

### Installation

1. Open a terminal and clone the project.

```
git clone https://github.com/mariusjagminas/Daylight.git
```

2. Navigate into Daylight directory.

```
cd Daylight
```

3. Install all dependencies.

```
npm install
```

4. Create .env file in the project's root directory.

5. Create the USER variable in the .env file. The variable value must be your GeoNames username.

```
 USER=your_user_name_on_GeoNames
```

6. Start webpack development server

```
npm start
```

The browser should open automatically. If not, open your browser and visit [http://localhost:8080/](http://localhost:8080/) to view the application.

## Production

Open a terminal and run.

```
npm run build
```

You will find the files in the dist. folder

## Testing

This app uses Jest for a unit testing. To run tests, open a terminal and type:

```
npm test
```

or

```
npm run watch
```

to run tests in a watch mode.

## Acknowledgements

Thanks to [klemenjarc](https://github.com/klemenjarc) for the feature suggestion. The feature has been implemented in the project. In addition, I've created a basic API endpoint for anyone who wants to use it:
[same-length-of-the-day-api](https://github.com/mariusjagminas/same-length-of-the-day-api)

