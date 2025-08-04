🔐 User Authentication System with Admin Dashboard (Node.js, Express, MongoDB)
This is a simple and secure user authentication system built using Node.js, Express.js, and MongoDB, featuring role-based access control. The system allows users to register and log in, while the admin has exclusive access to view a list of all registered users.

🚀 Features
✅ User Registration with hashed passwords (bcrypt)

🔐 Login Authentication with session or JWT

👤 Role-Based Access (User/Admin)

🧑‍💼 Admin Dashboard to view all registered users

❌ Unauthorized users restricted from admin routes

📦 MongoDB for persistent user data storage

🛠 Built with Express.js and Mongoose

🛠 Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: bcrypt (for hashing), JWT or express-session

Role Management: Middleware to protect admin routes

🔧 How it Works
User Registration:

New users can sign up by providing their name, email, and password.

Passwords are encrypted using bcrypt before storing in MongoDB.

By default, users are assigned the role user.

User Login:

Users log in with their email and password.

Upon successful login, a session or JWT token is issued.

The token/session is used to authenticate protected routes.

Admin Access:

Only users with the role admin can access the route to view all registered users.

Middleware checks for admin privileges before granting access.

User List Display:

The admin dashboard fetches all users from the database and displays them in a structured format.

📁 Folder Structure
pgsql
Copy
Edit
/models        => Mongoose schemas (User.js)
/routes        => Auth & admin routes
/controllers   => Logic for each route
/middleware    => Auth and role-check middlewares
/server.js     => Entry point
🔒 Security
Passwords are never stored in plain text.

Routes are protected by authentication middleware.

Admin routes include an additional role check.

