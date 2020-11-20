import styled from 'styled-components'
import { TiDeleteOutline } from 'react-icons/ti'

export const Wrapper = styled.div`
  padding: 0.8rem;
  font-size: 1rem;
  margin: 0.7rem 0px;
  background-color: rgba(249, 249, 249, 0.7);
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