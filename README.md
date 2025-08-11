# 📘 Blog API  
A simple and beginner-friendly RESTful API designed for handling user accounts and blog posts, built with:

Backend: Node.js + Express.js

Data Storage: LowDB

## ✨ Features
🔐 User Authentication – Register, login/logout, and session-based authentication

📝 CRUD Operations – Create, read, update, and delete blog posts

🛡 Middleware – Protect routes and validate requests

💾 Data Persistence – Store users and posts in JSON files using LowDB

📦 JSON Responses – Easy integration with frontend or Postman testing

## 🔧 Tech Stack
Node.js, Express.js, LowDB

## 🛠 Installation & Setup
1️⃣ Clone the repository

git clone https://github.com/matthew2513/blog-api.git

cd blog-api

2️⃣ Install dependencies

npm install

3️⃣ Run the server

## API Endpoints
📝 Blog Routes
| Method | Endpoint           | Description                      |
| ------ | ------------------ | -------------------------------- |
| GET    | `/`                | Read all posts                   |
| GET    | `/blog/filter`     | Read posts of the logged-in user |
| GET    | `/blog/:id`        | Read a specific post             |
| POST   | `/submit`          | Create a blog post               |
| PUT    | `/blog/:id/update` | Update a blog post               |
| DELETE | `/blog/:id/delete` | Delete a blog post               |

👤 Auth Routes
| Method | Endpoint    | Description              |
| ------ | ----------- | ------------------------ |
| POST   | `/register` | Register a new user      |
| POST   | `/login`    | Log in a user            |
| POST   | `/logout`   | Log out the current user |

🧪 Testing with Postman

Register a user and log in to get the session cookie.

All requests and responses use JSON format.
