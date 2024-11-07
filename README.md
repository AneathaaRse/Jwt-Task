User Authentication and Authorization with Bearer Tokens

This project is a Node.js application that implements user authentication and authorization using Bearer tokens. It follows the MVC pattern and utilizes MongoDB for data storage, JWT for token-based authentication, and Express.js for routing. API documentation is provided for testing and reference.

Features :

User Registration: Allows new users to register with a unique email and password. Passwords are securely hashed before being saved to the database.
User Login: Registered users can log in with valid credentials to receive a JWT (JSON Web Token) for authorization.
Token Verification: Middleware is used to verify the JWT from the request headers, allowing only authenticated users to access certain routes.
User Information Retrieval: Authenticated users can retrieve their information using their token.

Technologies Used:
Node.js
Express.js
MongoDB with Mongoose
JWT (jsonwebtoken)
bcryptjs for Password Hashing
Postman for API documentation and testing

Error Handling :
Each endpoint includes error handling to provide meaningful responses in cases of failed authentication, missing fields, or invalid credentials. Errors are returned with appropriate HTTP status codes and messages.

Documentation :
All API endpoints are documented with sample requests and responses. Use Postman to import this documentation and easily test each endpoint.

