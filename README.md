# Node.js Server with MongoDB - CRUD Operations

This is a simple Node.js server application that provides CRUD (Create, Read, Update, Delete) operations for managing products and clients in a MongoDB database.

## Table of Contents

- Getting Started
  - Prerequisites
  - Installation
- Project Structure
- Usage
  - Starting the Server
  - API Endpoints
- Technologies Used
- Contributing
- License

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js: [https://nodejs.org/](https://nodejs.org/)
- MongoDB: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community) (Make sure MongoDB is running)

### Installation

1. Clone this repository to your local machine:

2. Install project dependencies:

## Project Structure

The project is organized into the following directories:

- `controllers`: Contains controller functions for CRUD operations.
- `models`: Defines Mongoose models for products and clients.
- `routes`: Defines Express routes for handling API requests.
- `index.js`: Sets up the Express application and connects to MongoDB.

## Usage

### Starting the Server

To start the server, run the following command in your project directory:

The server will be running on port 3000 by default.

### API Endpoints

- **Products**

  - Create a new product: `POST /products`
  - Get all products: `GET /products`
  - Get a single product by ID: `GET /products/:id`
  - Update a product by ID: `PUT /products/:id`
  - Delete a product by ID: `DELETE /products/:id`

- **Clients**
  - Create a new client: `POST /clients`
  - Get all clients: `GET /clients`
  - Get a single client by ID: `GET /clients/:id`
  - Update a client by ID: `PUT /clients/:id`
  - Delete a client by ID: `DELETE /clients/:id`

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Cors
- dotenv
- nodemon

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
