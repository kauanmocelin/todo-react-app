import styled from 'styled-components'
import { TiDelete, TiEdit } from 'react-icons/ti'

export const Wrapper = styled.div`
  padding: 0.75rem;
  font-size: 1rem;
  margin: 0.7rem 0px;
  min-height: 46.7px;
  background-color: rgba(249, 249, 249, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ done }) => done && `
    text-decoration: line-through;
    color: rgb(52, 59, 60, 0.5);
  `}
`

export const StyledTiDelete = styled(TiDelete)`
  cursor: pointer;
  font-size: 1.2rem;
  color: crimson;
  margin-right: 3px;
`

export const StyledTiEdit = styled(TiEdit)`
  cursor: pointer;
  font-size: 1.2rem;
  color: darkorange;
`