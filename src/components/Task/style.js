import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti'

export const Wrapper = styled.div`
  padding: 10px 10px;
  margin: 10px 0px;
  background-color: #f9f9f9;
  border: 1px solid #eee;
  border-radius: 10px;
  color: #343b3c;
  display: flex;
  justify-content: space-between;

  ${({ done }) => done && `
    text-decoration: line-through;
    color: rgb(52, 59, 60, 0.5);
  `}
`

export const Label = styled.label`
  padding: 0px 0px;
`

export const StyledTiDeleteOutline = styled(TiDeleteOutline)`
  cursor: pointer;
  font-size: 1.2em;
  color: #f8374b;
`