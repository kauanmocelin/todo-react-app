import styled from 'styled-components'
import { TiDelete, TiEdit } from 'react-icons/ti'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(249, 249, 249, 0.7);
  padding: 0.75rem;
  font-size: 1rem;
  color: #423F5D;
  min-height: 47.7px;
  border-bottom: 1px solid #2f2f2f;

  ${({ done }) => done && `
    text-decoration: line-through;
    color: rgb(52, 59, 60, 0.5);
  `}
`

export const Span = styled.span`
  margin-left: 0.25rem;
`

export const StyledTiDelete = styled(TiDelete)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #423F5D;
  margin-right: 3px;
`

export const StyledTiEdit = styled(TiEdit)`
  cursor: pointer;
  font-size: 1.2rem;
  color: #423F5D;
`