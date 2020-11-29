import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  font-size: 0.90rem;
  color: #f1f1f1;
`

export const Button = styled.button`
  padding: 0.3rem;
  margin: 0px 1px;
  background-color: rgba(249, 249, 249, 0.7);
  color: #423F5D;
  font-size: 0.75rem;
  outline: none;
  font-family: inherit;
  cursor: pointer;

  &:hover, &:active {
    opacity: 0.8;
  }
`

export const ActionButton = styled(Button)`
  background-color: #ce748b;
  color: #f1f1f1;
`