const express = require("express");
const app = express();

app.get("/", (req,res) => {
    console.log(req);
    console.log("Sending status code 200");
    
    res.sendStatus(200);
})

app.listen(3000, (err) => {
    console.error(err);
})