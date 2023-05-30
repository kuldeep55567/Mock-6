const express = require("express");
const { UserModel } = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config()
const tokenList = {}
const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    const check = await UserModel.findOne({ email });
    if (check) {
        return res.status(200).json({ "mssg": "User already exists" })
    }
    bcrypt.hash(password, 9, async (err, hash) => {
        try {
            const data = new UserModel({ name, email, password: hash });
            await data.save();
            res.status(201).json({ "mssg": "User Registered Successfully" })
        } catch (error) {
            res.status(400).json({ "mssg": error.message })
        }
    })
})
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(401).json({ "mssg": "Email not registered" })
        }
        const sameCheck = await bcrypt.compare(password, user.password);
        if (!sameCheck) {
            res.status(200).json({ "mssg": "Wrong email or password" })
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '1hr' });
        const refreshToken = jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '24hr' });
        const response = {
            "ID": user._id,
            "Token": token,
            "Refresh_Token": refreshToken,
            "mssg": "Login Successfull"
        }
        tokenList[refreshToken] = response
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({ "mssg": error.message })
    }
})
module.exports ={
    userRouter
}