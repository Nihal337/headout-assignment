# HTTP Server Optimization Assignment

This repository contains the implementation of a simple HTTP server to fulfill the requirements outlined in the assignment.

## Implementation Details

### HTTP Server

The HTTP server is implemented using [Express.js](https://expressjs.com/), a web application framework for Node.js.

- The server listens for incoming GET requests on the `/data` endpoint.
- It accepts two query parameters: `n` (file name) and `m` (line number).
- If both `n` and `m` are provided, it returns the content of the file `/tmp/data/n.txt` at line number `m`.
- If only `n` is provided, it returns the entire contents of the file `/tmp/data/n.txt`.

### Random Text Files

Random text files with around 100MB of content each are generated using a separate script named `create-files.js`. These files are stored in the `/tmp/data` directory.

### Dockerfile

A Dockerfile is included in the root project directory to build a Docker image of the HTTP server. The Dockerfile ensures the following requirements are met:

- Compatible with both ARM architecture and x86.
- Exposes port 8080.
- Allocates a maximum of 1500 MB RAM and 2 CPU cores to the Docker container.

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- [Docker](https://www.docker.com/) installed on your system.

### Running the Server Locally

1. Clone this repository to your local machine.
2. Install dependencies using `npm install`.
3. Run the server using `node server.js`.
4. Access the server at `http://localhost:8080`.

### Building and Running Docker Image

1. Make sure Docker is running on your system.
2. Navigate to the root project directory.
3. Build the Docker image using `docker build -t http-server .`.
4. Run the Docker container using `docker run -d --rm --name http-server -p 8080:8080 --memory 1500m --cpus 2 http-server:latest`.

## Additional Notes

- The provided code is a basic implementation and may require further optimization and error handling based on specific requirements.
- Ensure to create the necessary random text files in the `/tmp/data` directory before running the server or building the Docker image.
- For further optimizations or improvements, consider implementing caching mechanisms, error handling for file operations, and performance tuning based on real-world usage scenarios.
