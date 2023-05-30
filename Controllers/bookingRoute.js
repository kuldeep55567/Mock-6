const express = require("express");
const { BookingModel } = require("../Model/BookingModel");
const { UserModel } = require("../Model/UserModel");
const { FlightModel } = require("../Model/FlightModel");
require("dotenv").config()
const bookingRouter = express.Router();
bookingRouter.post("/booking", async (req, res) => {
    try {
        const { user, flight } = req.body;
        const passenger = await UserModel.findById(user);
        if (!passenger) {
            return res.status(404).json({ "error": "User not found" })
        }
        const plane = await FlightModel.findById(flight);
        if (!plane) {
            return res.status(404).json({ "error": "Flight not Found" })
        }
        const booking = new BookingModel({ user: user, flight: flight })
        await booking.save()
        return res.status(201).json({ "mssg": "Flight Booked Successfully" })
    } catch (error) {
        return res.status(404).json({ "error": error.message })
    }
})
bookingRouter.get("/dashboard", async (req, res) => {
    try {
        const data = await BookingModel.find().populate('user').populate('flight');
        return res.status(200).json(data)
    } catch (error) {
        return res.status(404).json({ "error": error.message })
    }
})
module.exports ={
    bookingRouter
}