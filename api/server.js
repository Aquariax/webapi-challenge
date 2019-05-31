const express = require('express');
const server = express();
const actionsRouter = require('../routes/actions/actionsRouter')
const projectRouter = require('../routes/projects/projectRouter')


 server.use(express.json())

// Routes
server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectRouter)

 server.get("/", (req, res) =>{
    res.send( "hello")
})





 module.exports = server; 