import bodyParser from 'body-parser';
import express from 'express'
import Connection from './db/db.js';
import route from './Route/control.js';
import cors from 'cors'
import setupRoutesApi from './Route/control.js';
import http from 'http';
import fetch from 'node-fetch';

import { Server } from 'socket.io';
import { GettingContactMessages } from './connection/contactGroup.js';
const app = express();
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173', // Replace with your client's URL
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type'],
      credentials: true, // Enable cookies and authentication
    }})
    const sendToBackendRoute = async (data) => {
        console.log("the data",data)
     
        
        try {
            
          const response = await fetch('http://localhost:7000/groupContact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        
          if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error: ${response.status} - ${errorText}`);
            throw new Error(`HTTP Error: ${response.status}`);
          }
          return await response.json(); // Assuming JSON response
        } catch (err) {
          console.error("Error sending to backend route:", err);
          throw err;
        }
      };
        
      const socketToUserMap = {};
io.on('connection',(socket)=>{
    console.log('Client connected:', socket.id);

    socket.on('register', (userId) => {
        socketToUserMap[userId] = socket.id;
        console.log(`${userId} registered with socket ID: ${socket.id}`);
    });
    socket.on('message', async(data) => {
        const { sender, writer, text } = data;

        try {
            const response = await sendToBackendRoute(data);
            const recipientSocketId = socketToUserMap[writer];
            if (recipientSocketId) {
                // If recipient is online, emit message to them
                io.to(recipientSocketId).emit('message', {
                    sender: sender,
                    text: text,
                });
                console.log('Message sent to recipient:', recipient);
            } else {
                console.log('Recipient is offline:', recipient);
                // Optionally handle offline recipient (e.g., store the message to be sent later)
            }

            // Respond to the sender
         } catch (err) {
            console.error("Error forwarding message to backend:", err.message);
          }
      
        console.log('Message received from client:', data);
        // Respond back to the client
        socket.emit('message', `Hello, client! You said: ${data}`);
      });
    
      socket.on('disconnect', () => {
        const userId = Object.keys(socketToUserMap).find(key => socketToUserMap[key] === socket.id);
        if (userId) {
            delete socketToUserMap[userId];
            console.log(`${userId} disconnected`);
        }
    });
      });

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
