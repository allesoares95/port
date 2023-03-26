import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
  }

  p {
    font-size: 26px;
    font-weight: 400;
  }

`

export default GlobalStyles
