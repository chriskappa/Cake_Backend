# Cake API - Node.js + Express + MongoDB

## Overview
This is the **backend API** for the Cake App
---

## Features
- **RESTful API** - Full CRUD operations for cakes
- **Validation**  - Ensures valid data with **Zod**
- **Error Handling** - Centralized error middleware
- **MongoDB with Mongoose** - NoSQL database integration
- **Rate Limiting** - Protects against excessive requests
- **Middleware for ID Validation** - Ensures valid MongoDB IDs
- **SOLID Principles & Clean Code** - Maintainable and scalable structure

---

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for building REST APIs
- **MongoDB + Mongoose** - Database and ODM
- **Zod** - Schema validation
- **Cors** - Cross-Origin Resource Sharing
- **Morgan** - HTTP request logger
- **Express-Rate-Limit** - Rate limiting for security
- **HTTP-Errors** - Standardized error handling

---

## Installation and Setup
### **Prerequisites**
Ensure you have **Node.js** and **MongoDB** installed.

### **Clone the Repository**
```sh
git clone https://github.com/yourusername/cake-api.git
cd cake-api
```

### **Clone the Repository**
```sh
npm install
npm start
````

## API Endpoints

- **GET** `/api/cakes` → Get all cakes  
- **GET** `/api/cake/:id` → Get a single cake  
- **POST** `/api/addcake` → Add a new cake  
- **PUT** `/api/cake/:id` → Update a cake  
- **DELETE** `/api/cake/:id` → Delete a cake  
- **POST** `/api/cake/:id/comments` → Add a comment  
