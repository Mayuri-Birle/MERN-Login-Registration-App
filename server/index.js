let express = require("express")
let app = express()
const cors = require('cors')
const userAuthRoutes = require("./routes/index")
let mongoose = require("mongoose")
const CONFIG = require("./config")
app.use(express.json())
app.use(cors())
app.get("/", (req, res)=>{
    res.send("<h1>Hii Everyone</h1>")
})

app.use("/api", userAuthRoutes)

    mongoose.connect(DATABASE, { useNewUrlParser: true,
useUnifiedTopology: true}, ()=> console.log("Connected to db"))
app.listen(8081, ()=> console.log("Server started on 8081"))