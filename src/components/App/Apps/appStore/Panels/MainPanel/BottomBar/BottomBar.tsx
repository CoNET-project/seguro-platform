import styled from "styled-components"
import {SendIcon} from "../../../../../../UI/Icons/Icons";

const StyledBottomBar = styled.div`
  height: 50px;
  width: 100%;
  content: '';
  display: flex;
  align-items: center;
  padding: 10px;
`

const StyledInput = styled.input`
  height: 100%;
  border-radius: 25px;
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  width: 100%;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  padding: 0 10px;
  margin-right: 10px;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.ui.colors.border.medium};
  }
`

const SendMessageButton = styled.button`
  min-height: 30px;
  min-width: 30px;
  border: none;
  border-radius: 15px;
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5px 1.5px 0 0;
`

const BottomBar = () => {
    return (
        <StyledBottomBar>
			<StyledInput type="text" placeholder="Type your message..."/>
			<SendMessageButton>
				<SendIcon size={14} color="white"/>
			</SendMessageButton>
		</StyledBottomBar>
    )
}

export default BottomBar