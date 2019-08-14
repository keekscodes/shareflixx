

# ShareFlix
----------
## Table of Contents 
1. [Overview](#overview)
2. [Technologies](#technologies)
3. [Local Installation](#installation)
4. [App Display](#display)

<a name="preview"></a>
## Preview 
Our goal is to virtually connect people who are separated by distance to be able connect and watch movies/videos in real-time and allowing them to chat as well.

<a name="overview"></a>
## Overview 
A MERN stack video-streaming app where multiple people could remotely choose and watch the same content in real-time with the ability to chat with each other.

<a name="technologies"></a>
## Technologies
* React
* MongoDB
    * Mongoose
* Express
* HTML
* CSS
    * Materialize
* JavaScript
* Socket.io
* auth0-js
* MomentJS
* Heroku
* Git
    * GitHub
* React-Router

<a name="display"></a>
## App Display
### Live Demo
* [Click Here](https://project3-30992.herokuapp.com/)

# Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
