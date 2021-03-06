import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import TextField from '../TextField'

import {
  P,
  chatWidth,
} from '../../../styles'

import {
  withHeaderStatus,
} from '../../../HOC'

// Containers
export const StyledChat = withHeaderStatus(styled.div`
  color: ${props => props.color || 'inherit'};
  height: calc(100vh ${props => props.headerIsOpen && '- 50px'});
  position: sticky;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 1fr 70px;
  transition: .3s ease-out 0s height;
`)

export const StyledTopPanel = styled.div`
  display: grid;
  padding: 0 10px;
  grid-template-columns: auto 100px 1fr 34px;
  grid-column-gap: 5px;
`
export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 70px 1fr 70px 70px;
`

export const StyledChatLog = styled.div`
  overflow-y: scroll;
`

// Message
export const StyledMessage = styled.div`
  background: ${props => props.theme.color.background.secondary};
  color: ${props => props.color || 'inherit'};
  padding: 10px;
  margin: 5px;
  min-height: 80px;
  display: grid;
  grid-template-columns: 65px auto 1fr auto;
  border-radius: 5px;
`
export const MessageAvatar = styled.img`
  grid-column: 1;
  grid-row: 1/3;
  margin: 0;
  width: 60px;
  border-radius: 50%;
`

export const MessageDate = styled(P)`
  grid-column: 3;
  grid-row: 1;
  margin: auto 5px;
  color: ${props => props.theme.color.text.secondary}
`
export const MessageText = styled.div`
  grid-column: 2/8;
  grid-row: 2;
  padding-bottom: 10px;
`
// input
export const MainInput = styled.textarea`
  box-sizing: border-box;
  height: 50px;
  margin: auto 0;
  font-size: 18px;
  padding: 4px;
  background: inherit;
  color: inherit;
  resize: none;
`
