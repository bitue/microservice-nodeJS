# E-Commerce Microservices (MERN)

This project is a **microservices-based e-commerce platform** built with the **MERN stack** (MongoDB, Express, React, Node.js). Each service operates independently with its own database.

## Features
- ✅ User Authentication (JWT-based)
- ✅ Product Management (CRUD operations)
- ✅ Order Management (Includes Product Details)
- ✅ Microservices Communication (Order Service fetches Product details)
- ✅ Secure APIs with JWT Authentication
- ✅ Independent Databases for each service

---

## Folder Structure
ecommerce-microservices/ │── user-service/ # User Authentication Microservice │── product-service/ # Product Management Microservice │── order-service/ # Order Processing Microservice │── shared/ # Shared utilities (e.g., JWT verification) │── docker-compose.yml # Docker Setup (optional) │── README.md # Documentation
