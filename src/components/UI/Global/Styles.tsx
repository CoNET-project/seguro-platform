import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato Bold', sans-serif;
  }

  h1 {
    font-size: 2.25rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    font-family: 'Lato Regular', sans-serif;
    font-size: 16px
  }
`