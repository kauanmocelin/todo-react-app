import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 2rem auto;
`

export const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 0.8rem;
  font-size: 1rem;
  font-family: inherit;
  border: none;
  background-color: rgba(249, 249, 249, 0.7);
  color: #423F5D;
  outline: none;
  flex-grow: 1;

  ::placeholder {
      opacity: 0.5;
  }
`

export const AddButton = styled.button`
  padding: 0.65rem;
  font-size: 1.2rem;
  border: none;
  color: #423F5D;
  background-color: rgba(249, 249, 249, 0.7);
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #f9f9f9;
    background-color: #ce748b;
  }
`