import styled from 'styled-components'

export const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
`

export const InputText = styled.input.attrs({
  type: 'text',
})`
  width: 100%;
  padding: 10px 10px;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 10px;
  outline: none;
  text-align: left;
  color: #343b3c;
  font-family: inherit;
  font-size: medium;

  ::placeholder {
      opacity: 0.5;
  }
`

export const InputSubmit = styled(InputText).attrs({
  type: 'submit',
})`
  background-color: #511d47;
  text-align: center;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
`

export const InputWrapper = styled.div`
  flex: 10 1 auto;
`

export const ButtonWrapper = styled.div`
  flex: 1 1 auto;
`