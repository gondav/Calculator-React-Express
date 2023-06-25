# Backend
This is the backend application for handling number-related operations.

## Prerequisites
Before running the backend, make sure you have the following software installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.

`
$ cd backend
`

1. Install the dependencies using npm.

`
$ npm install
`

## Configuration

1. Create a .env file in the root directory of the project.
2. Start the development server using the following command:

`
$ npm run dev
`

## Production

To build and run the backend in a production environment:

1. Ensure that the dependencies are installed (see the Installation section).
2. Build the project using the following command:

`
$ npm run build
`

1. Start the server using the following command:

`
$ npm start
`

The server will be running at http://localhost:5050.

## API Endpoints

The backend provides the following API endpoints:

- GET /api/number: Retrieves a number.
- POST /api/number: Saves a number
The server will be running at http://localhost:5050.

### Response
If the number is successfully saved, the API will respond with a 200 OK status code.
