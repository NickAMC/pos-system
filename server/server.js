const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const bodyParser = require('body-parser')
const PORT = process.env.PORT 
const {MONGODB_URI} = process.env;

const app = express()

// enable parsing JSON and URL-encoded request
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// MongoDB connection setup
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.post('/', async (req, res) => {
     const { username, password} = req.body

     try {
          const user = await UserActivation.findOne({username, password})
          if ( user ) {
               res.status(200).json({message : 'Login Successful'})
          } else { 
               res.status(401).json({message: 'Invalid User Info'})
          }
     } catch (error) {
          console.error('Error during login', error)
          res.status(500).json({message: 'Server Error'})
     }
})

