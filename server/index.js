const express = require("express");
const cors = require("cors");
let path = require("path");
const app = express();
let bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/client`));

app.get('/webfontkit-20231024-183222/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', req.url));
});

const { getCompliment, getFortune, receivePraise, becomeAllstar, deleteAllstar } = require('./controller');


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/praise", receivePraise)
app.put("/api/allstars", becomeAllstar)
app.delete("/api/allstars/:id", deleteAllstar)

app.get(['*.js', '*.css', '*.wav'], (req, res) => {
    res.sendFile(path.join(__dirname, '../client', req.url));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.listen(4000, () => console.log("Server running on 4000"));
