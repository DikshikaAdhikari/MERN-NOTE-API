# User & Post CRUD API

A simple RESTful API built with **Node.js**, **Express.js**, **Sequelize ORM**, and **PostgreSQL (Supabase)**.

This project demonstrates CRUD operations, model relationships, request validation, and API testing using Postman.

## Features

- Create and retrieve users
- Create and retrieve posts
- One-to-Many relationship (User → Posts)
- Email uniqueness validation
- Age validation
- Sequelize ORM with PostgreSQL
- RESTful API endpoints
- Tested using Postman

## Tech Stack

- Node.js
- Express.js
- Sequelize ORM
- PostgreSQL (Supabase)
- Postman
- dotenv

## Project Structure

```
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

## Installation

```bash
npm install
npm run dev
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /users | Create a user |
| GET | /users | Get all users |
| POST | /posts | Create a post |
| GET | /posts | Get all posts |

## Author

**Dikshika Adhikari**
