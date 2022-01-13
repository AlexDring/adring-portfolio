import * as React from "react"
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './components/Footer';
import Nav from './components/Nav'

export default function HomePage () {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <h1><span class="subtitle">Welcome,</span><br /> 
        I’m Alex Dring.<br />
        <span class="subtitle">Full-stack web developer.</span></h1>
      <p>Hi i'm the home page</p>
      <Footer />
    </>
  );
}