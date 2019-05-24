const express = require("express");
const server = express();

server.get("/", (req, res) => {
    res.send("Server up and running...")
});

module.exports = server