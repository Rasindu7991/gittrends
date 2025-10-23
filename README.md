# GitTrends

A React application that displays trending GitHub repositories from the last 10 days. Built with React, Material-UI, and GitHub API.

## Features

- Display trending GitHub repositories
- Pagination support
- Responsive design
- Star count and repository information
- Easy navigation with First, Previous, and Next buttons

## Live Demo

Visit the live application at: [https://gittrendsapp.netlify.app/]

## Technologies & Packages Used

### Core Dependencies
- **React** - Frontend library for building user interfaces
- **@mui/material** - Material-UI components for modern UI design
- **@mui/icons-material** - Material Design icons
- **@emotion/react** & **@emotion/styled** - CSS-in-JS styling solution

### API & Data Handling
- **axios** - Promise-based HTTP client for making API requests
- **moment** - Date formatting and manipulation library

### Development Tools
- **prettier** - Code formatting tool to ensure consistent code style
- **eslint-config-prettier** - ESLint configuration to work with Prettier
- **react-scripts** - Scripts and configuration used by Create React App

## Code Formatting

This project uses Prettier for code formatting. The configuration can be found in `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

To format code:
```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The application will open in your default browser at `http://localhost:3000`.

