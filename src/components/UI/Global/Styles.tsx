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
    font-size: clamp(1.2rem, 3vw + 1rem, 2rem);
  }

  h2 {
    font-size: clamp(1.4rem, 3vw + 1rem, 1.6rem);
  }

  h3 {
    font-size: clamp(1.2rem, 3vw + 1rem, 1.6rem);
  }

  p {
    font-family: 'Lato Regular', sans-serif;
    font-size: clamp(14px, 3vw + 1rem, 16px);
  }
`