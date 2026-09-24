const express = require("express")

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        message:"welcome to code here"
    })
})

app.listen(3000,()=>{
    console.log("listen http://localhost:3000")
})