const express = require("express");
const cors = require("cors");
const app = express();
let path = require("path");
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

const { getCompliment, getFortune, receivePraise, becomeAllstar, deleteAllstar } = require('./controller');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.post("/api/praise", receivePraise)
app.put("/api/allstars", becomeAllstar)
app.delete("/api/allstars/:id", deleteAllstar)

app.listen(4000, () => console.log("Server running on 4000"));
