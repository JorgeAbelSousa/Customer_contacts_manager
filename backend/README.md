# Customer Contacts Manager

## Description

This project is a backend application in NestJS that allows you to register customers with their linked contacts. It offers basic CRUD operations for customers and contacts, user authentication and JWT token generation. The goal is to provide a simple and functional solution to manage customer records and their contacts.

## Prerequisites

Before running this project, make sure you have the following installed on your machine:

Node.js
npm or yarn (package managers)
PostgreSQL (database)

## Installation

1. Clone this repository to your local machine:

```bash
$ git clone git@github.com:JorgeAbelSousa/Customer_contacts_manager.git
```

2. Access the project directory:

```bash
$ cd customer_contacts_manager
```

3. Create a .env file in the project root and fill in the environment variables:

```plaintext
$ DATABASE_URL="postgresql://your-user:your-password@host:port/your-db?schema=public"
SECRET_KEY=your-secret-key-to-sign-jwt
```

Be sure to fill in the correct information for your-username, your-password, localhost, 5432, your-database, and your-secret-key-to-sign-jwt.


Install project dependencies:

With npm:

```bash
$ npm install
```

or with Yarn:
```bash
$ yarn install
```

## Running the app

After configuring the database and environment variables, you can run the project locally using the following command:

With npm:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

or with yarn:

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

The server will start and listen for requests on port 3000 by default.


## API Endpoints

The API has the following endpoints:

## POST /login

Endpoint for user authentication.

Request
```json
${
  "email": "your-email@example.com",
  "password": "your-password"
}
```
Response
```json
${
  "token": "your-jwt-token"
}
```

## POST /customers

Endpoint to create a new customer.

Request
```json
${
  "fullName": "Full Name",
  "email": "your-email@example.com",
  "password": "your-password",
  "phoneNumber": "your-phone-number"
}
```

Response
```json
${
  "id": "customer-id",
  "fullName": "Full Name",
  "email": "your-email@example.com",
  "phoneNumber": "your-phone-number",
  "registerDate": "registration-datetime"
}
```

## [Protected route] GET /customers
Endpoint to list all customers.

Response
```json
$[
  {
    "id": "customer-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number"
  }
]
```

## [Protected route] GET /customers/id
Endpoint to retrieve a customer.

Response
```json
$[
  {
    "id": "customer-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number"
  }
]
```

## [Protected route] UPDATE /customers/id
Endpoint to update a customer.

Response
```json
$[
  {
    "id": "customer-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number"
  }
]
```

## [Protected route] DELETE /customers/id
Endpoint to remove a customer.

Response
200 ok


## [Protected route] POST /contacts
Endpoint to create a new contact.

Request
```json
${
  "fullName": "Full Name",
  "email": "your-email@example.com",
  "phoneNumber": "your-phone-number"
}
```

Response
```json
${
  "id": "contact-id",
  "fullName": "Full Name",
  "email": "your-email@example.com",
  "phoneNumber": "your-phone-number",
  "customerId": "customer-id"
}
```

## [Protected route] GET /contacts

Endpoint to list all contacts.

Response
```json
${
    "id": "contact-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number",
    "customerId": "customer-id"
}
```

## [Protected route] GET /contacts/id

Endpoint to retrieve a contact from the signed customer.

Response
```json
${
    "id": "contact-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number",
    "customerId": "customer-id"
}
```

## [Protected route] UPDATE /contacts/id

Endpoint to update a contact from the signed customer.

Request
```json
${
  "fullName": "Full Name",
  "email": "your-email@example.com",
  "phoneNumber": "your-phone-number"
}
```

Response
```json
${
    "id": "contact-id",
    "fullName": "Full Name",
    "email": "your-email@example.com",
    "phoneNumber": "your-phone-number",
    "customerId": "customer-id"
}
```

## [Protected route] DELETE /contacts/id

Endpoint to remove a contact from the signed customer.

Response
200 ok

## Stay in touch

- Author - [Jorge Sousa](https://www.linkedin.com/in/jorge-abel-86bb8bb7/)

## License

Nest is [MIT licensed](LICENSE).
