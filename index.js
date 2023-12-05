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
    user: 'your_username',
    password: 'your_password',
    database: 'discussHub'
});

// Connect to the database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});

global.db = db;

// Set up css
app.use(express.static(__dirname + '/public'));

// Set the directory where Express will pickup HTML files
app.set('views', __dirname + '/views')

// Tell Express that we want to use EJS as the templating engine
app.set('view engine', 'ejs');

// Tells Express how we should process html files
// We want to use EJS's rendering engine
app.engine('html', ejs.renderFile);

// Define our data
var forumData = {forumName: "Discuss Hub"};

// Requires the main.js file inside the routes folder passing in the Express app and data as arguments. All the routes will go in this file
require("./routes/main")(app, forumData);

// Start the web app listening
app.listen(port, () => console.log(`Forum App listening on port ${port}.`))