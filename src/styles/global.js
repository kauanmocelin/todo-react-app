import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 50px;
    background-color: #b1bfd8;
    background-image: linear-gradient(315deg, #b1bfd8 0%, #6782b4 74%);
    font-family: 'Lato', sans-serif;
    font-size: medium;
  }
`
export default GlobalStyle