import { createGlobalStyle } from 'styled-components';
import headerFont from '../assets/fonts/Now-Bold.otf';
import bodyFont from '../assets/fonts/GeneralSans-Regular.otf';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-header: 'Now', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    --black: #251A33;
    --lighter-black: rgba(37, 26, 51, 0.8);
    --gradient-red: linear-gradient(90deg, #611dae 0%, #ea817a 92.19%);
    --gradient-light-red: linear-gradient(90deg, rgba(97, 29, 174, 0.6) 0%, rgba(234, 129, 122, 0.6) 92.19%);
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

  *, *:before, *:after {
  box-sizing: border-box;
}

  html {
    font-family: 'General Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
    font-size: 100%;
  }

  h1, h2, h3, h4, h5,h6 {
    margin: 0 0;
    font-family: var(--font-header);
    font-family: 
  }

  p {
    margin: 0;
    line-height: 150%;
  }
  
  button {
    font-family: var(--font-header);
    font-size: 1.125rem;
    font-weight: 700;
    background: white;
    border: 2px solid var(--black);
    padding: 10px 46px 12px;
  }
 `;

export default GlobalStyles;
