import { createGlobalStyle } from 'styled-components';
import headerFont from '../assets/fonts/Now-Bold.otf';
import bodyFont from '../assets/fonts/GeneralSans-Regular.otf';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-header: 'Now', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    --black: #003752;
    --lighter-black: #335F75;
    --gradient-red: linear-gradient(
      90deg,
      hsl(268deg 71% 40%) 0%,
      hsl(286deg 76% 37%) 21%,
      hsl(301deg 76% 35%) 30%,
      hsl(313deg 71% 41%) 39%,
      hsl(323deg 63% 47%) 46%,
      hsl(331deg 61% 53%) 54%,
      hsl(340deg 65% 58%) 61%,
      hsl(348deg 69% 63%) 69%,
      hsl(356deg 71% 67%) 79%,
      hsl(4deg 73% 70%) 100%
    );
    --gradient-light-red: linear-gradient(
      90deg,
      hsl(268deg 47% 64%) 0%,
      hsl(285deg 42% 63%) 21%,
      hsl(302deg 37% 63%) 30%,
      hsl(316deg 46% 67%) 39%,
      hsl(326deg 54% 70%) 46%,
      hsl(335deg 60% 73%) 54%,
      hsl(343deg 65% 76%) 61%,
      hsl(350deg 69% 78%) 69%,
      hsl(357deg 71% 80%) 79%,
      hsl(4deg 72% 82%) 100%
    );
    --gradient-blue: linear-gradient(
      90deg,
      hsl(268deg 71% 40%) 0%,
      hsl(260deg 54% 48%) 11%,
      hsl(252deg 52% 54%) 22%,
      hsl(245deg 56% 60%) 33%,
      hsl(239deg 60% 65%) 44%,
      hsl(234deg 67% 69%) 56%,
      hsl(230deg 74% 73%) 67%,
      hsl(226deg 81% 76%) 78%,
      hsl(224deg 89% 81%) 89%,
      hsl(221deg 100% 85%) 100%
    );
    --gradient-light-blue: linear-gradient(
      90deg,
      hsl(247deg 47% 78%) 0%,
      hsl(243deg 49% 80%) 21%,
      hsl(238deg 52% 82%) 30%,
      hsl(235deg 56% 83%) 39%,
      hsl(232deg 61% 85%) 46%,
      hsl(229deg 66% 87%) 54%,
      hsl(226deg 71% 88%) 61%,
      hsl(224deg 78% 90%) 69%,
      hsl(222deg 87% 92%) 79%,
      hsl(220deg 100% 94%) 100%
    );
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

  h1, h2, h3, h4, h5, h6 {
    margin: 0 0;
    font-family: var(--font-header);
    font-family: 
  }

  p {
    margin: 0;
    line-height: 150%;
  }

  section {
    margin: auto;
  }

  ul {
    font-size: 1.125rem;
    line-height: 1.75rem;
    list-style: none;
  }
  
  button {
    font-family: var(--font-header);
    font-size: 1.125rem;
    font-weight: 700;
    background: white;
    border: 2px solid var(--black);
    padding: 10px 46px 12px;
    color: var(--black);
  }
 `;

export default GlobalStyles;
