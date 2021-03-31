const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const User = require("../models/user") //import le model user
const { validation_register, validation_login } = require("../validation")

//REGISTER
router.post("/register", async (req, res) => {
    //validate data befor register
    const a = 5
    const { error } = validation_register(req.body)
    if (error) return res.send(error.details[0].message)

    //check email
    const email_user = await User.findOne({ email: req.body.email })
    if (email_user) return res.send("Email already exists!")

    //create user
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        const user_register = await user.save()
        res.json(user_register)
        console.log("POST successefly")
    } catch (error) {
        res.json({ message: error })
    }
})

//LOG IN
router.post("/login", async (req, res) => {
    //validate data befor log in
    const { error } = validation_login(req.body)
    if (error) return res.send(error.details[0].message)

    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.send("Not found email")

    const validpassord = await req.body.password.localeCompare(user.password) //localcompare if equal return 0(faux)
    if (validpassord) return res.send("Not found password")

    // create and assign token // password and email correct
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
    res.header("auth-token", token).send({
        token: token,
        message: "logged in !",
    })
})

module.exports = router
