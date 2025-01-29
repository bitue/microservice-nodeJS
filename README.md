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


---

# 🚀 Getting Started

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download) (v14+)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Postman](https://www.postman.com/downloads/) (for API testing)

---

## 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-repo/ecommerce-microservices.git
cd ecommerce-microservices
2️⃣ Install Dependencies
Run the following inside each microservice directory:

bash

cd user-service && npm install
cd ../product-service && npm install
cd ../order-service && npm install


3️⃣ Configure Environment Variables
Each service needs a .env file.
Create a .env file inside each microservice and add the following:

🔹 User Service (user-service/.env)
makefile

MONGO_URI=mongodb://localhost:27017/userdb
JWT_SECRET=your_secret_key
PORT=5001

🔹 Product Service (product-service/.env)
bash

MONGO_URI=mongodb://localhost:27017/productdb
PORT=5002
🔹 Order Service (order-service/.env)
makefile

MONGO_URI=mongodb://localhost:27017/orderdb
PORT=5003
JWT_SECRET=your_secret_key


4️⃣ Start the Services
Open three terminal windows and run:

🔹 Start User Service
bash

cd user-service
npx nodemon server.js
🔹 Start Product Service
bash

cd product-service
npx nodemon server.js
🔹 Start Order Service
bash

cd order-service
npx nodemon server.js
📌 API Endpoints
1️⃣ User Service (/api/users)
Method	Endpoint	Description	Auth Required
POST	/register	Register a new user	❌
POST	/login	Login & get JWT token	❌
GET	/profile	Get user profile	✅
Example Requests
🔹 Register User
http

POST http://localhost:5001/api/users/register
Content-Type: application/json
json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
🔹 Login User
http

POST http://localhost:5001/api/users/login
Content-Type: application/json
json

{
  "email": "john@example.com",
  "password": "123456"
}
2️⃣ Product Service (/api/products)
Method	Endpoint	Description	Auth Required
POST	/products	Add a new product	❌
GET	/products	Get all products	❌
GET	/products/:id	Get product details	❌
PUT	/products/:id	Update product	❌
DELETE	/products/:id	Delete product	❌


3️⃣ Order Service (/api/orders)
Method	Endpoint	Description	Auth Required
POST	/orders	Create a new order	✅
GET	/orders	Get all orders (with products)	❌
GET	/orders/:id	Get order details (with product)	❌








