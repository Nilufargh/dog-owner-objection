const { response } = require("express")
const express = require("express")
const app = express()

//if the specific port were in the env use that 
//if not use 4000
const port = process.env.PORT || 4000
app.get("/", (req,res) =>{
    res.json({
        message: "kiss kiss"
    })
})




app.listen(port)
