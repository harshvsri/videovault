# VideoVault

VideoVault is a dynamic video sharing and streaming platform inspired by YouTube. It allows users to upload, share, and stream videos.

Key features include:

- **Video Uploads:** Users can upload videos in various formats and share them.
- **Streaming:** High-quality streaming capabilities ensure a smooth viewing experience.
- **User Accounts:** Users can create accounts, manage their video uploads.
- **Comments and Likes:** Users can engage with videos by leaving comments and likes.
- **Search and Discovery:** A robust search function allows users to find specific videos.

This project aims to replicate the core functionality of YouTube, providing a platform for learning and experimenting with video hosting and streaming technologies.

## Technologies Used

This project was built using the MERN stack, which includes:

- **MongoDB**: A source-available cross-platform document-oriented database program. Used for storing our data as JSON-like documents.
- **Express.js**: A back end web application framework for Node.js, designed for building web applications and APIs.
- **React.js**: A JavaScript library for building user interfaces. Used for building the client side of the application.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine. Used for building the server side of the application.

## Data Models

The Entity-Relationship Diagram (ER-Diagram) below provides a visual representation of these data models, illustrating how different entities relate to each other within the system.

![Data Model ER-Diagram](model.png)

## Contribution Guide

If you're a beginner and want to contribute to this project, follow these steps:

1. **Fork the Repository**: Click on the fork button at the top right corner of this page and clone the forked repository to your local machine. This creates a copy of this repository in your account.

   ```bash
   git clone https://github.com/<your-username>/VideoVault.git
   ```

2. **Client Setup**: After cloning the repository, you need to set up the client:

   - **Install Dependencies**: Navigate to the client directory and install the necessary dependencies using npm:

     ```bash
     cd client
     npm install
     ```

   - **Start the Client**: Once the dependencies are installed, you can start the client using the following command:

     ```bash
     npm run dev
     ```

3. **Server Setup**: After setting up the client, you need to set up the server:

   - **Create a .env file**: Create a new file in the server directory of the project named `.env`. Inside the `.env` file, add the following lines:

     ```properties
     DB_URL = "mongodb://127.0.0.1:27017/kinetoDB"
     SESSION_SECRET = "this is a secret"
     ```

     These are environment variables that the server needs to run properly. Make sure to replace the values with your actual database URL and session secret.

   - **Install Dependencies**: Navigate to the server directory and install the necessary dependencies using npm:

     ```bash
     cd server
     npm install
     ```

   - **Install Nodemon Globally**: If you're planning to make changes in the server, it's recommended to install Nodemon globally. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. You can install it using npm:

     ```bash
     npm install -g nodemon
     ```

4. **Create a New Branch**: Use the `git checkout` command to create a new branch.

   ```bash
   git checkout -b <your-branch-name>
   ```

5. **Make Changes**: Make your changes in the new branch.

6. **Commit and Push Your Changes**: Once you have made your changes, use the `git add` command to stage your changes for commit. Then, use the `git commit` command to commit your changes.

   ```bash
   git add .
   git commit -m "<your-commit-message>"
   git push origin <your-branch-name>
   ```

7. **Create a Pull Request**: Go to your repository on GitHub, you will see a `Compare & pull request` button. Click on that button to create a pull request.

Thank you for your contribution! 🎉
