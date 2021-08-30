import { createGlobalStyle } from 'styled-components';
import LatoLightWoff from '../../../assets/fonts/lato-300.woff'
import LatoLightWoff2 from '../../../assets/fonts/lato-300.woff2'
import LatoRegularWoff from '../../../assets/fonts/lato-regular.woff'
import LatoRegularWoff2 from '../../../assets/fonts/lato-regular.woff2'
import LatoBoldWoff from '../../../assets/fonts/lato-700.woff'
import LatoBoldWoff2 from '../../../assets/fonts/lato-700.woff2'

export default createGlobalStyle`
  @font-face {
    font-family: 'Lato Light';
    src: local('Lato Light'), local('Lato Light'),
    url(${LatoLightWoff}) format('woff'),
    url(${LatoLightWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato Regular';
    src: local('Lato Regular'), local('Lato Regular'),
    url(${LatoRegularWoff}) format('woff'),
    url(${LatoRegularWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Lato Bold';
    src: local('Lato Bold'), local('Lato Bold'),
    url(${LatoBoldWoff}) format('woff'),
    url(${LatoBoldWoff2}) format('woff2');
    font-weight: 300;
    font-style: normal;
  }
`