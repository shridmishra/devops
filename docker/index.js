const express = require("express")

const app = express();

app.get("/",(req,res)=>{
    res.send("hello 20")
})

app.listen(3000)