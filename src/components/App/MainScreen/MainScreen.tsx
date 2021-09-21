import styled from 'styled-components';
import GlobalBar from "../../UI/Global/GlobalBar/GlobalBar";

const StyledContents = styled.div`
  background-color: ${props => props.theme.ui.backgroundColor};
  content: '';
  height: calc(100% - 48px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`

const MainScreen = () => {
    return (
        <div>
            <GlobalBar/>
            <StyledContents>
                <div style={{flex: 1}}>
                    <h1>MAIN SCREEN</h1>
                </div>
            </StyledContents>
        </div>
    )
}

export default MainScreen
