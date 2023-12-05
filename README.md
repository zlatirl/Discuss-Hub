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

- Create a new database named `discussHub`
- In Index.js, replace `your_username` and `your_password` with your sql username and password
- Run the provided SQL script to create the necessary tables:
`mysql -u your_username -p discussHub < create_db.sql`
(Replace `your_username` with your MySQL username)

5. Start the application:

`node index.js`

6. Open your web browser and go to http://localhost:8000 to access Discuss Hub.

## Dependencies

- Express
- EJS
- MySQL
- Body-parser

## Contributing

If you'd like to contribute to Discuss Hub, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.