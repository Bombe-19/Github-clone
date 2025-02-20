# Github-Clone SRM

## Description
Github-Clone SRM is a React-based web application designed to display upcoming and past events. It provides a clean and modern interface that focuses on usability and accessibility. Users can browse through a list of events with clear, visually engaging layouts.

## Features
- **Responsive Design**: Optimized for both mobile and desktop views.
- **Event Listings**: Shows detailed information on past and upcoming events.
- **Lazy Loading**: Components like `ComingSoonSection` and `EventCard` are lazy-loaded to improve performance.
- **Gradient Footer**: A sleek footer with social media links and modern design.
- **Styled Components**: CSS-in-JS for better management of styles.
- **Suspense with Lazy Loading**: Efficient loading of components, improving performance and user experience.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: Handles routing and navigation in the application.
- **Styled Components**: For modular and reusable CSS-in-JS styling.
- **React Icons**: For including icons in the footer and other sections.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload if you make changes. You may also see lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
Refer to [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
The build is optimized for the best performance, with minified files.

### `npm run eject`
If you aren’t satisfied with the default configuration, you can `eject`. This will expose the full configuration files, allowing for more customization. Note that this action is irreversible.

## Project Structure

```plaintext
/
├── public/
│   ├── index.html
│   └── path-to-your-robot-image.png  // Image file for the ComingSoonSection
├── src/
│   ├── components/
│   │   ├── ComingSoonSection.js
│   │   ├── EventCard.js
│   │   └── EventPage.js
│   ├── data/
│   │   └── event.js
│   ├── styles/
│   │   └── EventPage.css
│   └── App.js
├── package.json
└── README.md


