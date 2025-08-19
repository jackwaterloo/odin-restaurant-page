# Pancake Palace - Restaurant Page

A dynamic single-page restaurant website built as part of The Odin Project curriculum. This project demonstrates modular JavaScript development and modern frontend tooling.

## Live Demo

[View the live demo](https://jackwaterloo.github.io/odin-restaurant-page/)

## Project Overview

Project outline can be found [here](https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page).

This project is a single-page application for a fictional restaurant called "Pancake Palace". The entire content of the page is generated dynamically using JavaScript DOM manipulation, as per the Odin Project's Restaurant Page project. The site features tabbed browsing between Home, Menu, and Contact pages without page reloads.

## Skills Demonstrated

### Modern JavaScript
- **ES6+ Features**: Utilizes module imports/exports, arrow functions, template literals, and destructuring for cleaner and more efficient code.
- **DOM Manipulation**: Demonstrates extensive use of the DOM API to create, modify, and append elements dynamically, building the entire page content with JavaScript.
- **Event Handling**: Implements event listeners for tab-switching functionality, allowing users to navigate between different sections of the website (Home, Menu, Contact) without page reloads.

### Module Bundling with Webpack
- **Asset Management**: Webpack is configured to bundle JavaScript modules, CSS, and JSON data into optimized files for deployment.
- **Development Server**: Uses `webpack-dev-server` for live reloading during development, improving the development workflow.
- **HTML Generation**: Employs `HtmlWebpackPlugin` to generate the HTML file from a template, injecting the bundled JavaScript.
- **CSS Processing**: Configured `style-loader` and `css-loader` to load and bundle CSS files, allowing for modular CSS management.

### NPM and Dependency Management
- **Package Management**: Utilizes npm to manage project dependencies, including webpack, loaders, and plugins.

### Project Organization
- **Modular Design**: The codebase is structured into modules, promoting code reusability and maintainability.
- **Separation of Concerns**: Clear separation between data (JSON files), presentation logic (JavaScript modules), and styling (CSS files).
- **Component-Based Architecture**: The UI is built using reusable components, making it easier to manage and update the application.

### JSON Data Management
- **External Data Storage**: Menu items and contact information are stored in JSON files, allowing for easy updates and modifications to the content.
- **Data Integration**: Demonstrates how to load and render data from JSON files into the DOM, creating dynamic and data-driven web pages.

## Project Structure

```
odin-restaurant-page/
├── src/                      # Source files
│   ├── components/           # JS Modules that create page content
│   ├── public/               # Static assets and data
│   │   └── json/             # JSON data files
│   ├── styles/               # CSS files
│   ├── main.html             # HTML template
│   ├── index.js              # Entry point
│   └── load-page.js          # Page loading utility
├── webpack.config.js         # Webpack configuration
└── package.json             # Project metadata and dependencies
```

## Getting Started

### Prerequisites
- Node.js and npm installed

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/jackwaterloo/odin-restaurant-page.git
   ```
2. Navigate to the project directory:
   ```
   cd odin-restaurant-page
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npx webpack serve
   ```
5. Open http://localhost:8080 in your browser