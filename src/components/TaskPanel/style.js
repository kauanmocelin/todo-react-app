import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.90rem;
  color: #343b3c;
`

export const Button = styled.button`
  padding: 0.3rem;
  margin: 0px 1px;
  border: 1px solid #eee;
  border-radius: 10px;
  background-color: rgba(249, 249, 249, 0.7);
  font-size: 0.75rem;
  outline: none;
  font-family: inherit;
  cursor: pointer;

  &:hover, &:active {
    border-color: rgb(80, 80, 80);
  }
`