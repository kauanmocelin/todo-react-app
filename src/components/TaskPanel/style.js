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
  padding: 0.5rem;
  margin: 0px 1px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: rgba(249, 249, 249, 0.7);
  font-size: 1rem;
  outline: none;
  font-family: inherit;
  cursor: pointer;

  &:hover, &:active {
    border-color: rgb(80, 80, 80);
  }
`