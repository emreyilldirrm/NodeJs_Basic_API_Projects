//const app = require('express')()//direk fonksiyon olarak atadık
const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const pagerouter = require("./routers/pageRouter")
const userrouter = require("./routers/userPageRouter")
require('./db').conn()

app.use(express.urlencoded())
app.use(express.json())

app.use("/",pagerouter)
app.use("/user",userrouter)


app.listen(process.env.PORT || 5000,async (req,res) => {
    console.log("http://localhost:3000/ çalıştırıldı")
})