# Photographer Admin Backend

This is the repository of the NestJS backend developed to serve as an administrator for registering photos and videos for a photographer's frontend page.

## Environment Configuration

Before starting the server, you need to set up the environment. Make sure you have a `.env` file at the root of the project with the following variables:

    JWT_SECRET= # secret key for JWT
    APP_PORT= # port for the server
    DATABASE_NAME= # name of the database
    DATABASE_USER= # username for the database
    DATABASE_PASS= # password for the database
    DATABASE_URI= # URI for the database

Make sure to correctly fill in all variables with the necessary information for your environment configuration.

## Installation

1.  Clone this repository on your local machine:

bashCopy code

`git clone https://github.com/lribeiromoura/photographer-page-back`

2.  Navigate to the project directory:

`cd photographer-page-back`

3.  Install the necessary dependencies:

`npm install`

## Running the Server

After setting up the environment and installing the dependencies, you can start the NestJS server. Make sure you have a database instance configured and running.

Run the following command to start the server:

    # development
    npm  run  start

    # watch mode
    npm  run  start:dev

    # production mode
    npm  run  start:prod

This will start the server on the port specified in the `.env` file.

## Features

The backend offers the following features:

- Creation, editing, listing and deletion of medias.
- User authentication with JWT.
- User management (administration of user accounts).

## Postman Collection

The Postman collection can be accessed through the `/postman`, by importing to your postman application.

## Contribution

If you wish to contribute to this project, feel free to submit pull requests and propose improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
