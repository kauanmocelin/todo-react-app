import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    
  body {
    min-height: 100vh;
    font-family: 'Lato', sans-serif;
    font-size: medium;
    background: linear-gradient(#e66465, #9198e5);
  }
`
export default GlobalStyle