const express = require("express");
const app = express();
const { connection } = require("./Config/db")
const { userRouter } = require("./Controllers/userRoute");
const { flightRouter } = require("./Controllers/flightRoute");
const { bookingRouter } = require("./Controllers/bookingRoute");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi= require("swagger-ui-express")
require("dotenv").config()
app.use(express.json())
app.get("/", (req, res) => {
    try {
        res.send({ "mssg": "Welcome to Air ticketing System" })
    } catch (error) {
        res.send({ "error": error.message })
    }
})
app.use("/api", userRouter)
app.use("/api", flightRouter)
app.use("/api", bookingRouter)
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Node js API project for Air Ticketing System',
            version: '1.0.0',
            description:
                "About : - This is Air Ticket Booking System in which a user can book flights and admins can manage it.",
            licence: {
                name: "BookMyShoot"
            },
            contact:{
                name:"AeroBooking",
                email:"kanj55567@gmail.com",
            },
        },
        servers:[
            {
                url:"https://localhost:4500/"
            }
        ]
    },
    apis:['./Controllers/*.js']
}
const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
app.listen(4500, async () => {
    try {
        await connection
        console.log("Database connected to Server");
    } catch (error) {
        console.log("Error while Connecting");
    }
    console.log(`Server is Running at port : ${process.env.PORT}`);
})