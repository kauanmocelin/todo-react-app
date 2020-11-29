import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(#e66465, #9198e5);
  font-family: 'Lato', sans-serif;
  font-size: medium;
`

export const AppWrapper = styled.div`
  background-color: #423F5D;
  width: 40%;
  min-width: 450px;
  height: 700px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`