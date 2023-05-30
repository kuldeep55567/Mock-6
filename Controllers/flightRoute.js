const express = require("express");
const { FlightModel } = require("../Model/FlightModel");
require("dotenv").config()
const flightRouter = express.Router();

flightRouter.get("/flights", async (req, res) => {
    try {
        const data = await FlightModel.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
flightRouter.get("/flights/:id", async (req, res) => {
    const ids = req.params.id
    try {
        const data = await FlightModel.findOne({_id:ids})
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
flightRouter.post("/flights", async (req, res) => {
    try {
        const flight = new FlightModel(req.body)
        await flight.save()
        res.status(200).json({"mssg":"Flight added Successfully"})
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
flightRouter.patch("/flights/:id", async (req, res) => {
    const ids = req.params.id
    try {
        const flight = await FlightModel.findByIdAndUpdate(ids,req.body,{new:true})
        await flight.save()
        res.status(200).json({"mssg":"Flight Data Updated Successfully"})
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
flightRouter.delete("/flights/:id", async (req, res) => {
    const ids = req.params.id
    try {
        const flight = await FlightModel.findByIdAndDelete(ids)
        return res.status(200).json({"mssg":"Flight Data Deleted Successfully"})
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
module.exports ={flightRouter}
// {
//     "airline":"Indigo",
//      "flightNo": "Bv4567",
//      "departure": "India",
//      "arrival": "Dubai",
//      "departureTime": "2023-05-30T12:25:40.000Z",
//      "arrivalTime":"2023-05-30T13:25:40.000Z" ,
//     " seats":78,
//      "price": 4500
//    }
