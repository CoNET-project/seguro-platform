import styled from 'styled-components'
import {Fragment, ReactNode} from "react";
import {Close} from "../../Icons/Icons";
import {screenWidth} from "../../screenSizes";

export type HeaderBarProps = {
    className?: string,
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
  height: 50px;
  background-color: ${props => props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.text.textPrimary};
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.ui.border.color};
  position: relative;
  z-index: 10;

  @media (${screenWidth.mediumWidth}) {
    height: 60px;
  }
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
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.sm}
  }
`

const StyledHeaderSubtitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  color: ${props => props.theme.ui.text.textSecondary};
`

const HeaderBar = ({className, closeAction, headerContent, headerComponents}: HeaderBarProps) => {
    return (
        <StyledHeaderBar className={className}>
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
                        headerComponents.headerRight.map((component, idx) => (
                            <Fragment key={Math.random() * Math.random()}>
                                {component}
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
