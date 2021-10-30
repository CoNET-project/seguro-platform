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

  .tippy-box[data-theme~='custom'] {
    background: ${props => props.theme.ui.backgroundColor};
    color: ${props => props.theme.ui.text.textPrimary};
    border: 1px solid ${props => props.theme.ui.borderColor};
    box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.1);
  }

  // .tippy-box[data-placement^='bottom'] > .tippy-arrow::before {
  //   border-bottom-color: ${props => props.theme.ui.backgroundAccent} !important;
  // }
  //
  // .tippy-box[data-placement^='top'] > .tippy-arrow::before {
  //   border-top-color: ${props => props.theme.ui.backgroundAccent} !important;
  // }
  //
  // .tippy-box[data-placement^='left'] > .tippy-arrow::before {
  //   border-left-color: ${props => props.theme.ui.backgroundAccent} !important;
  // }
  //
  // .tippy-box[data-placement^='right'] > .tippy-arrow::before {
  //   border-right-color: ${props => props.theme.ui.backgroundAccent} !important;
  // }
`
