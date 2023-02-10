This application displays the most recent news from Hacker News API. It allows the user to filter by stack and save favorite posts in a simplified user-friendly interface. 

The application is deployed [here](https://euphonious-donut-76ef9e.netlify.app/)

## Requirements Checklist

### Stack

- [x] Latest version of React 
- [x] No third-party libraries for UI components (HTML/CSS)
- [x] Styled components or CSS Stylesheets
- [x] Deployment on Netlify from Git repository

### API

- [x] Usage of Hacker News API
- [x] Framework filter dropdown
- [x] Server side pagination
- [x] Discard posts without attributes ```author, story_title, story_url, created_at```

### Functionality

- [x] Selected filter persisted in local storage
- [x] Favorite posts persisted in local storage
- [x] Web-app is responsive
- [x] Pagination behaves like Material UI pagination
- [x] Clicking on row opens the post in a new tab ```story_url```
- [x] Change row and row's children opacity on hover

### Bonus

- [x] Implemented unit-testing
- [ ] Good use of Typescript
- [x] Pagination as infinite scroll

## How to run

1. Clone this repository
2. Inside the app's directory run `npm install`
3. To run tests use `npm run test`
4. Run the app with `npm start`

## Things that can be improved

- More test coverage
- Usage of Typescript
- Component library to reduce CSS 



