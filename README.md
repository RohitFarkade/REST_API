# 📘 My Practice REST API (Learning Project)

A simple REST API built using **Node.js + Express**, created for learning modular backend structure, routing, controllers, and configuration management.

This project evolves step-by-step from a **single-file Express server** into a **properly structured modular backend**.

---

## 🚀 Features

- Express server with modular structure  
- Environment variable support using `dotenv`  
- User CRUD APIs  
- Clean folder organization (controllers, routes, config)

---

## 📂 Project Structure

```

src/
config/
config.js
data/
users.json
middlewares/
errorHandler.js
notFound.js
validateUser.js
users/
controller.js
routes.js
service.js
index.js
.env
package.json

````

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- dotenv  

---

## ▶️ How to Run Locally

### 1. Install dependencies
```bash
npm install
````

### 2. Create `.env` file

```env
PORT=8000
```

### 3. Start the server

```bash
npm start
```

Server runs at:

```
http://localhost:8000
```

---

## 📡 Available API Endpoints

### Users API

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | `/users`     | Get all users   |
| GET    | `/users/:id` | Get user by ID  |
| POST   | `/users`     | Create new user |
| PATCH  | `/users/:id` | Update a user   |
| DELETE | `/users/:id` | Delete a user   |

---

# 🧰 Basic Git Commands

### Initialize Git

```bash
git init
```

### Check status

```bash
git status
```

### Add all files

```bash
git add .
```

### Commit

```bash
git commit -m "message"
```

### Add GitHub remote

```bash
git remote add origin https://github.com/<username>/<repo>.git
```

### Push to GitHub

```bash
git push -u origin main
```

### Pull latest changes

```bash
git pull
```

---

# ✔️ License

Free to use for learning.

```

---
