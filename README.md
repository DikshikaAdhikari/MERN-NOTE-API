# 👥 User & Post CRUD API

> **A clean RESTful API demonstrating CRUD operations, database relationships, validation, and PostgreSQL integration.**

Built with **Node.js · Express.js · Sequelize · PostgreSQL (Supabase)**.

---

## ✨ Overview

A backend API project designed to demonstrate how to build and structure a RESTful service with **Sequelize ORM** and **PostgreSQL**.

The project implements a **User → Posts** one-to-many relationship along with request validation and API testing using Postman.

---

## 🚀 Features

* 👤 Create & retrieve users
* 📝 Create & retrieve posts
* 🔗 One-to-Many relationship — `User → Posts`
* 📧 Unique email validation
* 🎂 Age validation
* 🗄️ PostgreSQL database with Supabase
* ⚙️ Sequelize ORM
* 🌐 RESTful API architecture
* 🧪 Postman API testing
* 🔐 Environment variable configuration

---

## 🛠️ Tech Stack

| Technology        | Purpose                   |
| ----------------- | ------------------------- |
| 🟢 **Node.js**    | Runtime environment       |
| 🚀 **Express.js** | REST API framework        |
| 🔷 **Sequelize**  | ORM & database management |
| 🐘 **PostgreSQL** | Relational database       |
| ☁️ **Supabase**   | PostgreSQL hosting        |
| 🧪 **Postman**    | API testing               |
| 🔑 **dotenv**     | Environment variables     |

---

## 📂 Project Structure

```text
Database/
├── config/
├── models/
├── feature/
│   ├── user/
│   └── post/
├── app.js
├── package.json
└── .env
```

---

## ⚡ Getting Started

### 1️⃣ Clone the repository

```bash
git clone <your-repository-url>
cd Database
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file:

```env
DB_HOST=your_host
DB_NAME=your_database
DB_USER=your_user
DB_PASSWORD=your_password
DB_PORT=5432
```

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description        |
| :----: | -------- | ------------------ |
| `POST` | `/users` | Create a new user  |
|  `GET` | `/users` | Retrieve all users |
| `POST` | `/posts` | Create a new post  |
|  `GET` | `/posts` | Retrieve all posts |

---

## 🔗 Database Relationship

```text
┌─────────────┐
│    User     │
└──────┬──────┘
       │
       │ 1 : N
       ▼
┌─────────────┐
│    Posts    │
└─────────────┘
```

One **User** can have multiple **Posts**, while each **Post** belongs to a single **User**.

---

## 🧪 API Testing

All endpoints were tested using **Postman** to verify:

* Request handling
* CRUD operations
* Validation
* Database relationships
* API responses

---

## 🎯 What I Learned

* Building RESTful APIs with Express.js
* Working with Sequelize ORM
* Designing PostgreSQL relationships
* Implementing request validation
* Connecting applications with Supabase
* Testing APIs with Postman
* Structuring a scalable backend project

---

## 👩‍💻 Author

### **Dikshika Adhikari**

**BICTE Student · Full-Stack Developer · MERN Stack Learner**

> *Building projects, solving problems, and growing one line of code at a time.* 🚀

---

⭐ **If you found this project useful, consider giving it a star!**
