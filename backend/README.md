# foodLens API

#### backend

The backend is the backend that serve the foodlens project.

#### Setup

- navigate to backend directory
- install dependencies (after navigating to the backend directory,run "npm install")

```sh
npm install
```

- create .env and provide correct values

.env

```js
MONGO_URI=
JWT_SECRET=
JWT_LIFETIME=
```
#### Starting the Project
- start the project(run "npm start" while already in the backend directory)

```sh
npm start
```

- you should see "Server is listening ...."text


- restart server with "npm start"

##### EndPoints
#### User registration
Front send user sign up data to:
http://localhost:3000/api/v1/auth/register

-the request is a Post request

--change the port 3000 to any port u want to run it on

- frontend send username,password and email to the server and receive the token and user details as response


#### User Login
frontend send a Post request to http://localhost:3000/api/v1/auth/login
and add headers to the request with Bearer and attcahed the token

-If authentication is successful,the server will send back the user details



