import {createGlobalStyle} from 'styled-components';
import {screenWidth} from "../screenSizes";

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato Bold', sans-serif;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px
  }

  h3 {
    font-size: 16px
  }

  p, a, div, span {
    font-family: 'Lato Regular', sans-serif;
    font-size: 13px;

    @media (${screenWidth.mediumWidth}) {
      font-size: 16px;
    }
  }

  button {
    cursor: pointer;
  }
`
