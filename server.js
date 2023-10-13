const express = require("express")
const path = require("path")
const https = require('https')
const fs = require('fs')

// This line is from the Node.js HTTPS documentation.
var options = {
    key: fs.readFileSync(path.join(__dirname, "config", "ssl", "key.pem")),
    cert: fs.readFileSync(path.join(__dirname, "config", "ssl", "cert.pem"))
};

const app = express()


app.use("/css", express.static(path.resolve(__dirname, "css")))
app.use("/js", express.static(path.resolve(__dirname, "js")))
app.use("/images", express.static(path.resolve(__dirname, "images")))

app.get("/login", (_, res) => {
    res.sendFile(path.resolve(__dirname, "pages", "login.html"))
})

app.get("/main", (_, res) => {
    res.sendFile(path.resolve(__dirname, "pages", "main.html"))
})

app.get("/connect-lobby", (_, res) => {
    res.sendFile(path.resolve(__dirname, "pages", "connect-lobby.html"))
})

app.get("/player/:lobby_name", (_, res) => {
    res.sendFile(path.resolve(__dirname, "pages", "player.html"))
})

app.get("/master/:lobby_name", (_, res) => {
    res.sendFile(path.resolve(__dirname, "pages", "master.html"))
})

// Create an HTTP service.
// http.createServer(app).listen(80);
// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(3000)