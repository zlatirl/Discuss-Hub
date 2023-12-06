module.exports = function (app, forumData) {

    // Handle our routes

    // Home Page
    app.get('/', function (req, res) {
        res.render('index.ejs', forumData);
    });

    // About Page
    app.get('/about', function (req, res) {
        res.render('about.ejs', forumData);
    });

    // Search Page
    app.get('/search', function (req, res) {
        res.render('search.ejs', forumData);
    });

    // Login Page
    app.get('/login', function (req, res) {
        res.render('login.ejs', forumData);
    });

    // Signup Page
    app.get('/signup', function (req, res) {
        res.render('signup.ejs', forumData);
    });

    // Registered Page
    app.post('/registered', function (req, res) {
        // Retrieve form data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        // Insert into database
        const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        const userData = [username, email, password];

        db.query(insertUserQuery, userData, (err, result) => {
            if (err) {
                // Handle error (e.g., duplicate username or email)
                console.log(err.message);
                return res.send('Registration failed. Please try again.');
            }

            // Registration successful
            res.send('Registration successful. Welcome, ' + username + '!');
        });
    });

    app.post('login', function (req, res) {
        // Retrieve form data
        const username = req.body.username;
        const password = req.body.password;

        // Check if username and password are correct
        const selectUserQuery = "SELECT * FROM users WHERE username = ? AND password = ?";
        const userData = [username, password];

        db.query(selectUserQuery, userData, (err, result) => {
            if (err) {
                // Handle error
                console.log(err.message);
                return res.send('Login failed. Please try again.');
            }

            if (result.length === 0) {
                // No user found
                return res.send('No user found.');
            }

            // Login successful
            res.send('Login successful. Welcome, ' + username + '!');
        });
    });
}