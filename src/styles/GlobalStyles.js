import { createGlobalStyle } from 'styled-components';
import headerFont from '../assets/fonts/Inter-Bold.otf';
import bodyFont from '../assets/fonts/GeneralSans-Regular.otf';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-header: 'Inter-Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
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
      hsl(260deg 54% 48%) 21%,
      hsl(252deg 52% 54%) 30%,
      hsl(245deg 56% 60%) 39%,
      hsl(239deg 60% 65%) 46%,
      hsl(234deg 67% 69%) 54%,
      hsl(230deg 74% 73%) 61%,
      hsl(226deg 81% 76%) 69%,
      hsl(224deg 89% 81%) 79%,
      hsl(221deg 100% 85%) 100%
    );
    --gradient-light-blue: linear-gradient(
      90deg,
      hsl(268deg 47% 64%) 0%,
      hsl(260deg 50% 68%) 21%,
      hsl(253deg 53% 73%) 30%,
      hsl(246deg 57% 77%) 39%,
      hsl(239deg 61% 80%) 46%,
      hsl(233deg 67% 82%) 54%,
      hsl(229deg 73% 85%) 61%,
      hsl(225deg 79% 88%) 69%,
      hsl(222deg 87% 91%) 79%,
      hsl(219deg 100% 94%) 100%
    );
  }

  @font-face {
    font-family: 'Inter-Bold';
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
    position: relative;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: var(--font-header);
  }

  p {
    margin: 0;
    line-height: 150%;
    margin-bottom: 12px;
  }

  section {
    margin: auto;
  }

  ul {
    font-size: 1.125rem;
    line-height: 1.75rem;
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    :focus {
      outline: auto 2px Highlight;
      outline: auto 5px -webkit-focus-ring-color;
    }
  }
  
  a.gradient {
    font-family: var(--font-header);
    font-size: 1.125rem;
    font-weight: 700;
    background: white;
    border: 2px solid var(--black);
    padding: 10px 46px 12px;
    color: var(--black);
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--gradient-red);
      bottom: -4px;
      right: -4px;
      z-index: -1;
    }
  }

 [data-reach-skip-link] {
   margin-top: 70px
 }
 `;

export default GlobalStyles;
