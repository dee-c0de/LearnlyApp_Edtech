# LearnlyApp_Edtech
## Assignment 
### Here’s a sample README file tailored to the requirements you’ve provided for the e-commerce product listing application:

---

# E-commerce Product Listing Application

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Setup](#project-setup)
- [API Endpoints](#api-endpoints)
- [Frontend Pages](#frontend-pages)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)
- [Database Schema](#database-schema)
- [License](#license)

## Overview

This is a simple e-commerce product listing application that allows users to view products, and authenticated users to add, edit, delete and manage products. The application is built with a Vue.js frontend and a Node.js backend using Express, integrated with MongoDB for data storage. It includes user authentication, CRUD operations for product management, and responsive design. It allows users to .


## Features

### Frontend (Vue.js)
- **Product Listing Page**: Displays products with details such as name, description, price, and image.
- **Add New Product**: Authenticated users can add new products via a form.
- **Search Functionality**: Users can filter products by name using a search bar.
- **User Authentication**: Users can log in via a form to access protected features.
- **Responsive Design**: The application is designed to be compatible across different devices.

### Backend (Node.js + Express)
- **Product Management API**: Supports CRUD operations for products.
- **User Authentication API**: Provides login functionality with JWT authentication.
- **Protected Routes**: Middleware is used to protect routes, allowing only authenticated users to add, update, or delete products.
- **Database Integration**: Utilizes MongoDB/MySQL/PostgreSQL for storing user and product data.

## Tech Stack

- **Frontend**: Vue.js, Vue Router, Vuex, CSS (Bootstrap/Tailwind CSS/Custom)
- **Backend**: Node.js, Express, JWT for authentication
- **Database**: MongoDB with Mongoose or SQL database with Sequelize

## Project Setup

### Frontend
### Frontend
- **Vue.js**: JavaScript framework for building user interfaces.
- **Vuex**: State management library for Vue.js.
- **Vue Router**: For routing between pages.
- **Axios**: For making HTTP requests.
- **Bootstrap**: For responsive design.


### Frontend Setup
1. Clone the repository.
   ```bash
   git clone <repository-url>
   ```
2. Create vue.js project
   ```bash
   vue create ecommerce-frontend
   ```
3. **Navigate to the frontend directory:**

   ```bash
   cd ecommerce-frontend
   ```

4. **Install dependencies:**

   ```bash
   npm install vuex vue-router axios bootstrap
   ```
5. **Create Project Structure**
```bash
   ecommerce-frontend
│
├── src
│   ├── assets
│   ├── components
│   │   ├── productList.vue
│   │   ├── addProduct.vue
│   │   ├── login.vue
│   ├── store
│   │   └── index.js
│   ├── views
│   │   ├── home.vue
│   │   ├── log.vue
│   │   └── addProd.vue
│   ├── app.vue
│   ├── main.js
│   └── router.js
│
├── public
│
```
6. **Run the development server:**

   ```bash
   npm run serve
   ```

   The application will be available on `http://localhost:8080`.

## Environment Variables

In the backend, create a `.env` file with the following variables:

```
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret_key>
```




### Backend
### Backend
- **Node.js**: JavaScript runtime built on Chrome's V8 engine.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product and user data.
- **Mongoose**: ODM for MongoDB, used for database operations.
- **JWT**: JSON Web Tokens for authentication.
- **Bcrypt.js**: For hashing passwords.
- **Dotenv**: For managing environment variables.

  

1 Initialize the node.js project 
   ```bash
   mkdir ecommerce-backend
   ```
2. Navigate to the backend directory.
   ```bash
   cd ecommerce-backend
   npm init -y
   ```
3. Install dependencies.
   ```bash
   npm install express mongoose bcryptjs    jsonwebtoken cors dotenv
npm install --save-dev nodemon
    ```

4. **Project Structure**
```bash
    ecommerce-backend
│
├── models
│   ├── userModel.js
│   └── productModel.js
│
├── routes
│   ├── authRoute.js
│   └── prodRoute.js
│
├── middleware
│   └── authMidware.js
│
├── config
│   └── database.js
│
├── .env
├── serverSetUp.js
└── package.json
   ```
5. Set up environment variable

6. Run the server.
   ```bash
   npm run start
   ```
   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:5000`.
## API Endpoints

### Authentication
- **POST /api/auth/login**: User login.

### Products
- **GET /api/products**: Get a list of products.
- **POST /api/products**: Add a new product (Authenticated users only).
- **GET /api/products/:id**: Get details of a specific product.
- **PUT /api/products/:id**: Update a product (Authenticated users only).
- **DELETE /api/products/:id**: Delete a product (Authenticated users only).


  ### Auth Routes

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in a user and receive a JWT.

### Product Routes

- **GET** `/api/products`: Retrieve all products.
- **POST** `/api/products`: Create a new product (requires authentication).
- **PUT** `/api/products/:id`: Update a product (requires authentication).
- **DELETE** `/api/products/:id`: Delete a product (requires authentication).

## Frontend Pages

- **Home Page (`/`)**: Displays the product listing.
- **Login Page (`/login`)**: Allows users to log in.
- **Add Product Page (`/add-product`)**: Authenticated users can add new products.
- **Edit Product Page (`/edit-product/:id`)**: Authenticated users can edit existing products.

## Deployment

To deploy the application, you can use services like Heroku for the backend and Netlify for the frontend. Ensure you configure the environment variables properly on the hosting platform.

### Deployment Steps

1. **Backend Deployment:**
   - Deploy to Heroku or any other Node.js hosting service.
   - Ensure MongoDB connection string and JWT secret are configured as environment variables on the platform.

2. **Frontend Deployment:**
   - Build the Vue.js application using the command `npm run build`.
   - Deploy the contents of the `dist/` directory to Netlify, Vercel, or any other static site hosting service.

## Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables:
Create a `.env` file in the backend directory and add the following:

```
PORT=5000
MONGO_URI=<your-mongodb-uri> or DATABASE_URL=<your-sql-database-url>
JWT_SECRET=<your-jwt-secret>
```

## Database Schema

### Users
- `username`: String, required
- `password`: String, required, hashed
- `email`: String, required

### Products
- `name`: String, required
- `description`: String, required
- `price`: Number, required
- `imageURL`: String, required
- `createdBy`: Reference to a user, required

---

This README provides clear instructions for setting up and running the project, as well as a comprehensive overview of the application's features and requirements. 
