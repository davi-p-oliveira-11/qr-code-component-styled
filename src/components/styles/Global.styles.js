import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

/*Google font */

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap');

/* Variables */

:root {

  /* Colors */

  --white: hsl(0, 0%, 100%);
  --light-gray: hsl(212, 45%, 89%);
  --grayish-blue: hsl(220, 15%, 55%);
  --dark-blue: hsl(218, 44%, 22%);

/* Typography */

 /* font-size */

 --fs-1: 0.9375rem;
 --fs-2: 1.375rem;

 /* font family */

 --ff-outfit: 'Outfit', sans-serif;

/* font-weight */

 --fw-400: 400;
 --fw-700: 700;

/* Reset Settings */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--ff-outfit), sans-serif;
}

img,
h3,
p {
  display: block;
}

/* Reused styles */

h3,
p {
  width: 16rem;
  margin-top: 1.1rem;
  line-height: 1.4;
}

body {
  background-color: var(--light-gray);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

`

export default GlobalStyles