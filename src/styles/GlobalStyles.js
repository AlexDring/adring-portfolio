 import { createGlobalStyle } from 'styled-components'
 import headerFont from '../assets/fonts/Now-Bold.otf'
 import bodyFont from '../assets/fonts/GeneralSans-Regular.otf'
 
 const GlobalStyles = createGlobalStyle`
  :root {
    --black: #251A33;
    --lighter-black: rgba(37, 26, 51, 0.8);
  }

  @font-face {
    font-family: 'Now';
    src: url($headerFont)
    font-style: bold;
    font-weight: 700;
  }

  @font-face {
    font-family: 'General Sans';
    src: url($bodyFont)
    font-style: regular;
    font-weight: 400;
  }

  html {
    font-family: 'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black)
  }

  h1 {
    font-family: 'Now', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 72px;
  }

  .subtitle {
    color: var(--lighter-black);
    font-size: 36px;
  }
 `

export default GlobalStyles