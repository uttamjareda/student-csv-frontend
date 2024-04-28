# Student Management Front-End

This React application interacts with the Student Management API to manage student records through a user-friendly interface.

## Features

- Upload CSV files to add student records.
- View all student records in a paginated table.
- Delete all student records.

## Prerequisites

- Node.js
- npm or yarn

## Local Setup

1. **Clone the Repository**

    ```bash
    git clone <repository_url>
    cd student-management-frontend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

    or if you are using yarn:

    ```bash
    yarn install
    ```

3. **Running the Application**

    ```bash
    npm start
    ```

    or with yarn:

    ```bash
    yarn start
    ```

    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Docker Support

This project includes a Dockerfile for building and running the application in a containerized environment.

### Building the Docker Image

```bash
docker build -t student-management-frontend .
