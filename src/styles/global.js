import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
    
  body {
    width: 100vw;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    font-size: medium;
    background: linear-gradient(#e66465, #9198e5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export default GlobalStyle