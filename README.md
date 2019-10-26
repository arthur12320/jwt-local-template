# passport local strategy

In this example you can see how to use the passport local strategy,
together with the jwt strategy.

The local stratey makes it possible to store users with username and
password into a local db and to then login into that account.

Once logged in the user will receive a JWT wich they can use in the
Authorization header param to get access to protected content

## endpoints

- POST users/signup: in this endpoint you will pass a object like the following
  in the body, the backend will create and store a new user and will terur a jwt
  token for the newly created user as response:

  - body:

  ```json
  {
    "username": "username",
    "password": "1234",
    "data": "lorem ipsum"
  }
  ```

  - response:

  ```json
  {
    "user_token": "jdfuhgdsuifhshufhu38r27rw"
  }
  ```

- POST users/login: in this endpoint you will pass a object like the following
  in the body, the backend will find a user with the given username and test it 
  the password matched, if so it will send a response with the JWT if note will
  respond with 403(unauthorized):

  - body:

  ```json
  {
    "username": "username",
    "password": "1234"
  }
  ```

  - response:

  ```json
  {
    "user_token": "jdfuhgdsuifhshufhu38r27rw"
  }
  ```

- GET users/data: in this endpoint you will pass a JWT token in the 
  authorization header of the request and will get back the data of 
  the user that JWT was givn to:

  - response:

  ```json
  {
    "data": "lorem ipsum"
  }
  ```

- PUT users/data: in this endpoint you will pass a body with a new 
  data and a JWT token in the authorization header of the request 
  and that data wil become the new data stored in the user of the JWT:

  - body:

  ```json
  {
    "data": "ipsum lorem"
  }
  ```

  - response:

  ```json
  {
    "data": "lorem ipsum"
  }
  ```

## step-by-step

- [x] create a signin functionality saving to the database
  - [x] create basic express app
  - [x] connect the app to the DB
  - [x] create model
  - [x] create routes file
    - [x] POST /users/signup - create new user
    - [x] POST /users/login - login to user
    - [x] GET /users/data - get the data of the user in jwt
    - [x] PUT /users/data - update the data of the user in jwt
- [x] create controller mockup
- [x] install jsonwebtoken
- [x] create function that receives user and returns jwt in controller
- [x] create signup function
- [x] install passport and passport-jwt
- [x] create passport.js
- [x] in passport.js create jwt strategy
- [x] require passport.js in router
- [x] use jwt strategy in router
- [x] create getData function
- [x] create updateData function
- [x] install passport-local
- [x] in passport.js create local strategy
- [x] use local strategy on router
- [x] install bcryptjs
- [x] modify code for bcrypt
  - [x] user model
    - [x] encrypt
    - [x] decrypt
  - [x] passport.js
- [x] create login function
