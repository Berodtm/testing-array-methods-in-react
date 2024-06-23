# Testing Array Methods

This project demonstrates the usage of various array methods in a React application built with Vite. The project includes a search functionality that filters a list of books based on user input.

## Technologies Used

 - React
 - Vite
 - JavaScript (ES6+)
 - HTML5
 - CSS3
 - gh-pages

## Array Methods Used

The project makes use of the following array methods:

 - filter: Used to filter the book list based on user input.
 - map: Used to iterate over the filtered book list and render the book information.

### Example

The filter method is used to iterate over the book list and return books that match the search criteria:

```javascript
const filteredSearch = booksData.filter(
(book) =>
book.title.toLowerCase().includes(inputSearchValue) ||
book.author.toLowerCase().includes(inputSearchValue) ||
book.id.toString().includes(inputSearchValue)
);
```

The map method is then used to render the filtered book list:

```javascript
<tbody>
  {props.filteredSearch.map((book) => (
    <tr key={book.id}>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
    </tr>
  ))}
</tbody>
```
## Setup and Deployment Instructions

To set up and deploy the project to GitHub Pages, follow these steps:

1. Clone the Repository

```sh
git clone https://github.com/Berodtm/testing-array-methords.git
cd testing-array-methords
```

2. Install Dependencies

```sh
npm install
```

3. Update vite.config.js

Add the base option to your vite.config.js file:

```javascript

import { defineConfig } from ‘vite’;
import react from ‘@vitejs/plugin-react’;

export default defineConfig({
plugins: [react()],
base: '/testing-array-methods-in-react/',
});
```

4. Update package.json

Add the homepage field and update the scripts section:

```json
{
{
  "name": "testing-array-methods-in-react",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://Berodtm.github.io/testing-array-methods-in-react",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "gh-pages": "^3.2.3",
    "vite": "^2.0.0",
    "@vitejs/plugin-react": "^1.0.0"
  }
}
```

5. Build the Project

```sh
npm run build
```

6. Deploy to GitHub Pages

```sh
npm run deploy
```

7. Push Changes to GitHub

```sh
git add .
git commit -m “Add gh-pages deployment settings”
git push origin main
```

8. Enable GitHub Pages

Go to your repository on GitHub, navigate to the Settings tab, and scroll down to the Pages section. Select the gh-pages branch as the source and save.

## How to Make Edits

1.	Clone the Repository

```sh
git clone https://github.com/Berodtm/testing-array-methords.git
cd testing-array-methords
```

2.	Make Your Changes

Edit the files as needed.

3.	Commit and Push Changes

```sh
git add .
git commit -m “Your commit message”
git push origin main
```

4.	Deploy Changes

```sh
npm run deploy
```