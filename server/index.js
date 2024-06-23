const connectToMongo=require('./db')
var express = require('express')
var cors = require('cors')
var app = express()
const port=7000;
connectToMongo()
app.use(express.json())
// app.get('/',(req, res)=>{
//     res.send("server started")
// })
app.use(cors())
app.get("/",(req,res)=>{
    res.send("app first page")
})
app.use("/notes",require("./routes/Notes"))
app.use("/auth",require("./routes/Auth"))

app .listen(port,()=>{
    console.log(`listening at port ${port}`)
})