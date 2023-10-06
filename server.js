const express = require('express')
const app = express();
const cors = require('cors');
app.use(express.json())

const dotenev = require('dotenv')
dotenev.config();
const cookieParser = require('cookie-parser')
//importing router

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ['POST','GET'],
    credentials:true
}));


app.use(cookieParser())

const userRoute = require("./routes")


const userCollection = require('./mongo')


//middleware
app.use("/api/users",userRoute)

app.get("/",() => {
    res.send("Hello server here")
})

app.listen(8080,() => {
    console.log("Server Ready");
})