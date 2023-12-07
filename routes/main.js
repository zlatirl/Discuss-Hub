module.exports = function (app, forumData) {

    // Handle our routes

    // Home Page
    app.get('/', function (req, res) {
        // Fetch recent posts and available topics from the database
        const getRecentPostsQuery = "SELECT * FROM Posts JOIN Users ON Posts.user_id = Users.user_id JOIN Topics ON Posts.topic_id = Topics.topic_id ORDER BY post_id DESC LIMIT 5";
        const getTopicsQuery = "SELECT * FROM Topics";

        db.query(getRecentPostsQuery, (err, posts) => {
            if (err) {
                console.log(err.message);
                return res.send('Error fetching posts.');
            }

            db.query(getTopicsQuery, (err, topics) => {
                if (err) {
                    console.log(err.message);
                    return res.send('Error fetching topics.');
                }

                res.render('index.ejs', { ...forumData, posts, topics });
            });
        });
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

    // Users Page
    app.get('/users', function (req, res) {
        const selectUsersQuery = "SELECT * FROM users";

        db.query(selectUsersQuery, (err, result) => {
            if (err) {
                // Handle error
                console.log(err.message);
                return res.send('Failed to fetch users, please try again.');
            }

            // Send the list of usernames to the users view
            res.render('users.ejs', {users: result, forumName: forumData.forumName});
        });
    });

    // Add New Post Page
    app.get('/addpost', function (req, res) {
        // Fetch available topics
        const getTopicsQuery = "SELECT * FROM Topics";
        db.query(getTopicsQuery, (err, topics) => {
            if (err) {
                console.log(err.message);
                return res.send('Error fetching topics.');
            }

            res.render('addpost.ejs', { ...forumData, topics });
        });
    });
    
    // Login Process Page
    app.post('/login-process', function (req, res) {
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
                return res.send('User not registered. Please Sign up.');
            }

            // Check if the password is incorrect
            const user = result[0];
            if (user.password === password) {
                res.send('Login successful. Welcome, ' + username + '!');
            } else {
                res.send('Incorrect password. Please try again.');
            }
        });
    });
}