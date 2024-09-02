# GitHub User Info Display

This project is a web application designed to display information about a GitHub user. The application uses GitHub's REST API to fetch user details and presents them in a visually appealing manner. The design includes a full-screen background with a semi-transparent rectangle in the center that holds the user information.

## Project Overview

### Design
- **Full-Screen Background**: The application features a full-screen background that sets the stage for the user interface.
- **Semi-Transparent Rectangle**: In the center of the screen, there is a semi-transparent rectangle that contains the displayed information. The transparency is set to ensure that the text within the rectangle is readable.
- **Information Display**: The central rectangle displays the following user information:
  - **Profile Picture**: The user's GitHub avatar.
  - **Full Name**: The user's full name.
  - **GitHub Handle**: The user's GitHub username.
  - **Location**: The user's location (if available).
  - **Bio**: A short biography of the user.

### User Input
- **GitHub Username Form**: On the right side of the screen, there is a form that allows users to enter a GitHub username. When submitted, the application fetches and displays the information for the specified username.

### Technology Stack
- **HTML**: The structure and content of the web application.
- **CSS**: The styling of the web application, including the background and transparent rectangle.
- **JavaScript**: Handles user input, API requests, and dynamic content updates.
- **GitHub API**: Used to fetch user data from GitHub.

### Example Response
The API returns a JSON response with the following structure:
```json
{
  "login": "username",
  "id": 123456,
  "avatar_url": "https://example.com/avatar.jpg",
  "name": "Full Name",
  "location": "Location",
  "bio": "User bio"
}
```

## Live Demo

You can view a live demo of the project [here](https://shivamoulodi.github.io/Github-search-users-by-username-using-github-api/).

---
