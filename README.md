📘 My Practice REST API (Learning Project)

A simple REST API built using Node.js + Express, created for learning modular backend structure, routing, controllers, and configuration management.

This project evolves step-by-step from a single file Express server into a properly structured modular backend.

🚀 Features

Express server with modular structure

Environment variables support (dotenv)

User CRUD APIs

Clean folder organization (controllers, routes, config)

📂 Project Structure
src/
  config/
    config.js
  controllers/
    user.controller.js
  routes/
    user.routes.js
  index.js
.env
package.json

🛠️ Tech Stack

Node.js

Express.js

dotenv

▶️ How to Run Locally
1. Install dependencies
npm install

2. Create .env file
PORT=8000

3. Start the server
npm start


Server runs at:

http://localhost:8000

📡 Available API Endpoints
Users
Method	Endpoint	Description
GET	/users	Get all users
GET	/users/:id	Get user by ID
POST	/users	Create new user
PATCH	/users/:id	Update a user
DELETE	/users/:id	Delete a user
🧰 Basic Git Commands (you’ll actually use)
Initialize Git (if not already initialized)
git init

Check status
git status

Add all files
git add .

Commit
git commit -m "message"

Add remote GitHub repo
git remote add origin https://github.com/<username>/<repo>.git

Push
git push -u origin main

Pull latest changes
git pull

✔️ License

Free to use for learning.