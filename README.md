# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Mobile - 375px](./screenshots/Mobile%20-%20375px.png)

_Mobile - 375px_

<br/>

![Desktop - 1440px](./screenshots/Desktop%20-%201440px.png)

_Desktop - 1440px_

### Links

- Solution URL: [Frontend Mentor](https://www.frontendmentor.io/solutions/faq-accordion-using-react-and-tailwind-xXrQMqnJOH)
- Live Site URL: [Netlify](https://main--cool-bombolone-5a5934.netlify.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - Frontend build tool

### What I learned

Used a react hook in an event handler function on a personal project for the first time.

```js
const [icon, changeIcon] = useState(iconPlus);

function toggleDetails(event) {
  if (event.target.open === true) {
    changeIcon(iconMinus);
  } else {
    changeIcon(iconPlus);
  }
}
```

### Useful resources

- [JavaScript Mastery](https://youtu.be/tS7upsfuxmo?si=fha_MuiRjaa6rh9q) - This tutorial gave me a comprehensive introduction to Tailwind CSS.

## Author

- GitHub - [@nadupoy](https://github.com/nadupoy)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b/)

## Acknowledgments

- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery)
