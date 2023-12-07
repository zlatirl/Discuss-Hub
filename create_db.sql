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

-- Inserting topics into topics table
INSERT INTO Topics (topic_name) VALUES ('General');
INSERT INTO Topics (topic_name) VALUES ('Technology');
INSERT INTO Topics (topic_name) VALUES ('Science');
INSERT INTO Topics (topic_name) VALUES ('Movies');
INSERT INTO Topics (topic_name) VALUES ('Books');
INSERT INTO Topics (topic_name) VALUES ('Travel');
INSERT INTO Topics (topic_name) VALUES ('Fitness');
INSERT INTO Topics (topic_name) VALUES ('Cooking');
INSERT INTO Topics (topic_name) VALUES ('Gaming');

# Create the Posts table
CREATE TABLE Posts (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    topic_id INT,
    content TEXT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (topic_id) REFERENCES Topics(topic_id)
);