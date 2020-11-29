import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const InputText = styled.input.attrs({
  type: 'text',
})`
  padding: 0.8rem;
  font-size: 1rem;
  font-family: inherit;
  border: none;
  background-color: rgba(249, 249, 249, 0.7);
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
  color: #444ec1;
  background-color: rgba(249, 249, 249, 0.7);
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #f9f9f9;
    background-color: #444ec1;
  }
`