require('dotenv').config()
const express = require("express");
const app = express();
// const port = 1000
app.get("/",(req , res)=>{
  res.send("hello backend")
})
app.get("/sandy",(req , res)=>{
    res.send("hello sandy")
})
app.get("/login",(req , res)=>{
  res.send('<h1>Please login at chai aur code </h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
})