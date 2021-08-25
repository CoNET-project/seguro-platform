import { ReactNode } from 'react'
import styled from 'styled-components'
import ThemeSwitcherControl from './ThemeSwitcherControl/ThemeSwitcherControl'

type ThemeDecoratorProps = {
    children: ReactNode
}

const StyledContainer = styled.div`
    position: absolute;
    width: 100%; height: 100%;
    top: 0; bottom: 0; left: 0; right: 0;
    color: ${props => props.theme.ui.storybook.canvasDecorator.color};
    display: flex; flex-direction: column;
`

const StyledControlsContainer = styled.div`
    height: 50px;
    background-color: ${props => props.theme.ui.storybook.canvasDecorator.controls.backgroundColor};
    display: flex; align-items: center;
    padding: 0 15px;
`

const StyledChildrenContainer = styled.div`
    flex: 1;
    display: flex; align-items: center; justify-content: center;
    background-color: ${props => props.theme.ui.storybook.canvasDecorator.backgroundColor};
`

const CanvasDecorator = ({
   children
}: ThemeDecoratorProps) => {
    return (
        <StyledContainer>
            <StyledControlsContainer>
                <ThemeSwitcherControl />
            </StyledControlsContainer>
            <StyledChildrenContainer>
                <div>
                    {children}
                </div>
            </StyledChildrenContainer>
        </StyledContainer>
    )
}

export default CanvasDecorator
