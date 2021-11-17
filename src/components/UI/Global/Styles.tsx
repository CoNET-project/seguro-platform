import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato Bold', sans-serif;
  }

  p, a, div, span {
    font-family: 'Lato Regular', sans-serif;
  }

  button {
    cursor: pointer;
  }

  .tippy-box[data-theme~='custom'] {
    background: ${props => props.theme.ui.backgroundColor};
    color: ${props => props.theme.ui.text.textPrimary};
    border: 1px solid ${props => props.theme.ui.borderColor};
    box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.2);
    padding: 0;
  }

  .tippy-content {
    padding: 0;
  }
`
