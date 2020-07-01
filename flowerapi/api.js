const express = require("express");
const app = express();

app.get("/", (req,res) => {
    console.log(req);    
    res.json({x: 10,y: 20});
})

app.listen(3000, (err) => {
    console.error(err);
})