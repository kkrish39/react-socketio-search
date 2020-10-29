import express from 'express'
import searchController from './controller'

const http = require("http");
const socketIo = require("socket.io");

const cors = require('cors')

const app = express()
const port = 8080

app.use(cors())

const server = http.createServer(app);
const io = socketIo(server);


let interval

/*Establish socket connection */
io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    
    let searchTerm = socket.handshake.query['searchId']
    interval = setInterval(() => getApiAndEmit(socket, searchTerm), 5000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
});

/** push data to the UI */
const getApiAndEmit = (socket, searchTerm) => {
    const response = searchController.sendDummyData(searchTerm)
    socket.emit("FromAPI", response);
  };


/*Health check*/
app.get("/", (req, res) => {
    res.send({ response: "Acme search super healthy" }).status(200);
});


/*Search query endpoint */
app.get('/acme/rest/:searchterm', searchController.getData)

server.listen(port, () => console.log(`The port is listening at ${port}`))