import styled from 'styled-components'

export const Container = styled.div`
  margin: 20px 0;
  color: #343b3c;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WrapperElement = styled.div``

export const Button = styled.button`
  padding: 10px 10px;
  margin: 0px 1px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: #fff;
  outline: none;
  font-family: inherit;
  font-size: medium;
  cursor: pointer;

  &:hover, &:active {
    border-color: rgb(80, 80, 80);
  }
`