/**
* @swagger
* components:
*   schemas:
*       User:
*           type: object
*           required:
*              - name
*              - email
*              - password
*           properties:
*               name:
*                   type: string
*                   description: username of the user
*               email:
*                   type: string
*                   description: The user's email
*               password:
*                   type: string
*                   description:  Password of the user
*/
/**
* @swagger
* components:
*   schemas:
*       Flight:
*           type: object
*           required:
*              - airline
*              - flightNo
*              - departure
*              - arrival
*              - departureTime
*              - arrivalTime
*              - seats
*              - price
*           properties:
*               airline:
*                   type: string
*                   description: Name of the company of flight
*               flightNo:
*                   type: string
*                   description: Flight Number
*               departure:
*                   type: string
*                   description:  From where the plane will depart
*               arrival:
*                   type: string
*                   description:  plane's arrival
*               departureTime:
*                   type: date
*                   description: time of depart
*               arrivalTime:
*                   type: date
*                   description:  time of arrival
*               seats:
*                   type: number
*                   description:  no of seats
*               price:
*                   type: number
*                   description:  price of 1 seat
*/
/**
* @swagger
* /api/register:
*   post:
*       summary: To register a user in the database
*       tags: [Users]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/User'
*       responses:
*           200:
*               description: User registered successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/User'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/login:
*   post:
*       summary: To login to the application
*       tags: [Users]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/User'
*       responses:
*           200:
*               description: User logged in successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/User'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/flights:
*   get:
*       summary: All available flights
*       tags: [Flights]
*       requestBody:
*           required: false
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description: fetched data Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/flights/:id:
*   get:
*       summary: available flight with id
*       tags: [Flights]
*       requestBody:
*           required: false
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description: fetched data Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/flights/:
*   post:
*       summary: add more flights
*       tags: [Flights]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description:  data posted Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/flights/:id:
*   patch:
*       summary: add more flights
*       tags: [Flights]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description:  data posted Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/fllights/:id:
*   delete:
*       summary: add more flights
*       tags: [Flights]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description:  data posted Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/booking/:
*   post:
*       summary: add more flights
*       tags: [Flights]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description:  data posted Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/
/**
* @swagger
* /api/dashboard/:
*   post:
*       summary: add more flights
*       tags: [Flights]
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/Flight'
*       responses:
*           200:
*               description:  data posted Successfully
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Flight'
*           500:
*               description: Some server error
*/