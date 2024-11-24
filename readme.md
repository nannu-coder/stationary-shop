# Stationary Shop Project

## Overview

This project is a **Stationary Shop** application built using **Node.js**, **Express**, **Mongoose**, **MongoDB**, and **TypeScript**. The application allows users to manage products, place orders, and track the total sales of the store. It includes the following core functionality:

- **CRUD Operations**: Create, read, update, and delete products in the shop.
- **Order Management**: Place an order for products, with real-time quantity updates.
- **Stock Control**: Automatically reduces product quantity when an order is placed.
- **Error Handling**: If the stock is insufficient for an order, an error message is returned.

## Features

- Create new products and update product details.
- Delete products from the store inventory.
- Place orders with real-time inventory checks.
- Track the total sales of the shop.
- Receive an error message when the product quantity is insufficient.

## Tech Stack

- **Node.js** – Server-side JavaScript runtime.
- **Express.js** – Web framework for building RESTful APIs.
- **MongoDB** – NoSQL database for storing product and order data.
- **Mongoose** – ODM library to interact with MongoDB.
- **TypeScript** – A superset of JavaScript that adds static types.

## Installation

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/stationary-shop.git
   cd stationary-shop
   ```

2. Install the required dependencies:

```
npm install
```

3. Set up MongoDB and create a .env file with your database URL:

```
DB_URL=your_database_url
```

4. Start the server:

```
npm run dev
```
