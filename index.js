// Import the modules we need
var express = require ('express')
var ejs = require ('ejs')
var bodyParser = require ('body-parser')
var mysql = require ('mysql');

// Create the express application object
const app = express()
const port = 8000
app.use(bodyParser.urlencoded({ extended: true }))

// Define the database connection
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'fill in here',
    password: 'fill in here',
    database: 'fill in here'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});
global.db = db;