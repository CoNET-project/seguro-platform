import styled from 'styled-components'
import {Fragment, ReactNode} from "react";
import {Close} from "../../Icons/Icons";
import {screenWidth} from "../../screenSizes";

export type HeaderBarProps = {
    closeAction?: {
        action: () => void,
        alignRight?: boolean,
        alwaysVisible?: boolean,
        icon?: ReactNode
    },
    headerContent: {
        title: ReactNode | string,
        subtitle?: ReactNode | string
    },
    headerComponents?: {
        headerLeft?: ReactNode,
        headerRight?: Array<ReactNode>
    }
}

type StyledHeaderCloseButtonProps = {
    alwaysVisible?: boolean
}

const StyledHeaderBar = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${props => props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.text.textPrimary};
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const StyledHeaderSection = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 7.5px;

  &:last-of-type {
    justify-content: flex-end;
    flex: unset;
  }
`

const StyledHeaderCloseButton = styled.button<StyledHeaderCloseButtonProps>`
  height: 100%;
  content: '';
  background-color: transparent;
  border: none;
  padding: 7.5px;
  @media (${screenWidth.mediumWidth}) {
    display: ${props => props.alwaysVisible ? 'initial' : 'none'};
  }
`

const StyledHeaderComponentWrapper = styled.div`
  margin: 0 7.5px;
`

const StyledHeaderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 7.5px;
`

const StyledHeaderTitle = styled.p`
`

const StyledHeaderSubtitle = styled.p`
  font-size: 12px;
  color: ${props => props.theme.ui.text.textSecondary}
`

const HeaderBar = ({closeAction, headerContent, headerComponents}: HeaderBarProps) => {
    return (
        <StyledHeaderBar>
            <StyledHeaderSection>
                {
                    closeAction && !closeAction.alignRight && (
                        <StyledHeaderCloseButton onClick={closeAction.action} alwaysVisible={closeAction.alwaysVisible}>
                            {
                                closeAction.icon || <Close size={24}/>
                            }
                        </StyledHeaderCloseButton>
                    )
                }
                {
                    headerComponents?.headerLeft && (
                        <StyledHeaderComponentWrapper>
                            {headerComponents.headerLeft}
                        </StyledHeaderComponentWrapper>
                    )
                }
                <StyledHeaderDetails>
                    <StyledHeaderTitle>
                        {headerContent.title}
                    </StyledHeaderTitle>
                    {
                        headerContent.subtitle && (
                            <StyledHeaderSubtitle>
                                {headerContent.subtitle}
                            </StyledHeaderSubtitle>
                        )
                    }
                </StyledHeaderDetails>
            </StyledHeaderSection>
            <StyledHeaderSection>
                {
                    headerComponents?.headerRight && (
                        headerComponents.headerRight.map((comp, idx) => (
                            <Fragment key={`headerRight-${idx}`}>
                                {comp}
                            </Fragment>
                        ))
                    )
                }
                {
                    closeAction && closeAction.alignRight && (
                        <StyledHeaderCloseButton onClick={closeAction.action} alwaysVisible={closeAction.alwaysVisible}>
                            {
                                closeAction.icon || <Close size={24}/>
                            }
                        </StyledHeaderCloseButton>
                    )
                }
            </StyledHeaderSection>
        </StyledHeaderBar>
    )
}

export default HeaderBar