import bodyParser from 'body-parser';
import express from 'express'
import Connection from './db/db.js';
import route from './Route/control.js';
import cors from 'cors'
import setupRoutesApi from './Route/control.js';
import http from 'http';
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173', // Replace with your client's URL
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true, // Enable cookies and authentication
    }})

io.on('connection',(socket)=>{
    console.log("my bsocket is",socket.id)
})
    
app.use(cors())
app.use(express.json())
app.use(bodyParser.json({extended :true}))
app.use(bodyParser.urlencoded({extended : true}))
app.use('/',route)

Connection();
const port =7000;
server.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})
