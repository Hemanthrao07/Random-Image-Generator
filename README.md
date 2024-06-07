# Random-Image-Generator

# Random Dog Image App

This is a simple Node.js application that uses Express.js, Axios, and EJS to fetch and display random dog images from the [Random Dog API](https://random.dog/woof.json).

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Error Handling](#error-handling)
- [License](#license)

## Introduction

The Random Dog Image App fetches random dog images from an external API and displays them in a web page. Users can click a button to fetch and display a new random dog image without reloading the page.

## Features

- Fetch and display random dog images.
- Responsive design with centered content.
- Button to load new images asynchronously.
- Basic error handling for API requests.

## Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd random-dog-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

## Usage

1. **Start the server:**
    ```bash
    node app.js
    ```
    - Or use `nodemon` for automatic restarts:
        ```bash
        nodemon app.js
        ```

2. **Open your browser and go to:**
    ```
    http://localhost:3000
    ```

## Project Structure

