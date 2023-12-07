# Discuss-Hub

Discuss Hub is a simple discussion forum web application built with Node.js, Express, EJS and MySQL.

## Installation

To run this application, follow these steps:

1. Clone the repository to your local machine.

`git clone https://github.com/zlatirl/Discuss-Hub.git`

2. Navigate to the project directory

`cd Discuss-Hub`

3. Install the required dependencies

`npm install`

4. Setup the MySQL database:

- Run the provided SQL script to create the necessary tables:
`mysql -u your_username -p discussHub < create_db.sql`
(Replace `your_username` with your MySQL username)

- Alternatively, you can do this:

`cd C:\Program Files\MySQL\MySQL Server 8.2\bin` - or wherever you have your MySQL directory installed.
`mysql -u your_username -p` and enter your password (if you have any).
`source path\to\create_db.sql`

5. Make adjustments to `index.js`

- Replace `your_username` and `your_password` with your sql username and password.
- Replace `add_key_here` on `secret:` with a strong and unique key of random numbers and letters.

6. Start the application:

`node index.js`

7. Open your web browser and go to http://localhost:8000 to access Discuss Hub.

## Dependencies

- Express
- EJS
- MySQL
- Body-parser
- Express-session