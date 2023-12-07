# Create database script for Discuss Hub

# Create the database
CREATE DATABASE discussHub;
USE discussHub;

# Create the Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

# Create the Topics table
CREATE TABLE Topics (
    topic_id INT AUTO_INCREMENT PRIMARY KEY,
    topic_name VARCHAR(255) UNIQUE NOT NULL
);

ALTER TABLE Posts
ADD COLUMN user_id INT,
ADD COLUMN topic_id INT,
ADD FOREIGN KEY (user_id) REFERENCES Users(user_id),
ADD FOREIGN KEY (topic_id) REFERENCES Topics(topic_id);