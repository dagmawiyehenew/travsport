# Getting Started with Create React App 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.


**Note: documentation for Travsport**

### Project decription 

We have built a simple horse race backend that runs a new race with six horses every minute of every day. The task is to build a React frontend (Two Screens: User Login & Race Status Display) that sub- scribe to via long-polling, and show these events. When a horse starts or finishes, an event is sent out in real time via a REST API.

If no new events have been published within 15 seconds after a request has been made, the request is cancelled and the backend returns HTTP status 204. Then the user needs to make a new request.
You will need to be authenticated to use the backend API. Authenticate with an email address, and the fixed password “PROVIDES BY TRAVSPORT”. Session will last 5 minutes. When the session expires, your user should automatically re- authenticate and continue receiving events.

## Spacifications
- User Login 
  - Authenticate with an email address and password
    - Session will last 5 minutes
    -  When the session expires, your user should automatically re- authenticate ?? 
       -  No refresh toke endpoint provided. re-connect by credential or logout user 
- Race Status Display
  - Show hors race events stream update when horse stars and finishes
    - Horse number 
    - Horse name
    - Hors race time

## Endpoint 
-  Root : http://35.207.169.147
   -  Authentication : /auth
   -  Race : /results

##### configrations and dependencies

- Endpoint
  Config the root url in you package.json as a proxy 
   
- Dependencies
  Installed dependencies 
    "react-router": "^6.4.3",
    "react-router-dom": "^6.4.3",


##### Structure 

|-- Containers
|----- Layout
|------- PrivateLayout 
|--------- View
|----------- Auth
|------------- Components
|------- PublicLayout
|--------- View
|----------- Race
|------------- Components


#### To do's

1 - Configurations and file structure
2 - Auth branch
   *  1.create a form 
   *  2.Validate the form
   *  3.Login the user
   *  4.Save the credentials 
   *  5.Re. auth the user every 3 mints if no use not active
   *  6.Logout user

3 - Grant permisson och session expired   
* Expired
   * 1. List user events
   * 2. Every time user visit the privet pages
   *      clear the current user session time
   *      reset the session the event
   * 3. If use not active and session timed out? then logout user
* Grant permisson
  * Private route 
  * Public route
  
