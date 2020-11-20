import styled from 'styled-components'

export const Form = styled.form`
  min-height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40%;
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
  padding: 0.8rem;
  font-size: 1rem;
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