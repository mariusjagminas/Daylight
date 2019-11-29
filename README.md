# Daylight

Shows current sunset and sunrise times for a selected location.

Visit [https://day-light.netlify.com/](https://day-light.netlify.com/) to view the app.

## What is your motivation for creating this project?

The changing length of days and nights depends on the location and time of year. It would be nice to know how many hours of daylight we have in a specific location.

## How will users interact with your web site?

The user types in the search box a city or country name, and will get current sunset and sunrise times for that location.

## What 3rd Party API(s) will you integrate with?

- [GeoNames](http://www.geonames.org/export/web-services.html)
  - To discover the longitude & latitude for the location
  - To get a sunrise & sunset times from long/lat.

## Tech Stack

- [Bulma](https://bulma.io/) CSS framework.

## Will you try to implement any stretch features?

- I'll use [Webpack](https://webpack.js.org/) to bundle modules.

## What will be your process?

- I will submit commit when a feature is added, or a task is accomplished.
- I'll test the website manually.
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

5. In .env file create variable USER .Variable value must be your username at GeoNames.

```
 USER=your_user_name_on_GeoNames
```

6. Start webpack development server

```
npm start
```

The browser should open automatically. If not so, then open the browser and visit [http://localhost:8080/](http://localhost:8080/) to view an application.

## Production

Open a terminal and run.

```
npm run build
```

You will find files in dist folder.
