/* const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

require('dotenv').config({path:"./config.env"})
app.use(cors());
app.use(express.json());


const con = require('./db/connection.js')
app.use(require('./routes/route'));


con.then(db => {
    if(!db) return process.exit(1);
    app.listen(port, () => {
        console.log(`Server is running on port: http://localhost:${port}`)
    })
    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
}).catch(error => {
    console.log(`Connection Failed...! ${error}`);
});
  */



const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const connectDB = require('./db/connection');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use routes
app.use('/api', route);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on  port ${PORT}`);
});