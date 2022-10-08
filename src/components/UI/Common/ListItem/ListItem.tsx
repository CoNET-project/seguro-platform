import styled from "styled-components"
import React, {ReactNode} from "react"
import {screenWidth} from "../../screenSizes"

type ListItemProps = {
    className?: string,
    onClick?: () => void,
    itemHeader?: {
        title: ReactNode | string,
        headerRight?: ReactNode
    },
    itemLeft?: ReactNode,
    itemRight?: ReactNode,
    isSectionSeparator?: boolean
}

type StyledListItemProps = {
    isSeparator: boolean | undefined,
    hasClick: boolean
}

type StyledItemSectionProps = {
    fullWidth?: boolean,
    isSeparator?: boolean
}

const StyledListItem = styled.div<StyledListItemProps>`
  width: 100%;
  min-height: 40px;
  background-color: ${props => props.theme.ui.colors.background.foundation};
  color: ${props => props.theme.ui.colors.text.primary};
  padding: 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: ${props => props.hasClick ? 'pointer' : 'unset'};

  @media (${screenWidth.mediumWidth}) {
    padding: 10px 20px;
  }
`

const StyledListItemContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledItemSection = styled.div<StyledItemSectionProps>`
  display: flex;
  align-items: center;
  width: ${props => props.fullWidth ? '100%' : 'unset'};
  font-family: ${props => props.isSeparator ? "'Lato Bold', san-serif" : 'unset'};
  font-size: ${props => props.isSeparator ? `calc(${props.theme.ui.fontSizes.narrow.sm} + 1px)` : props.theme.ui.fontSizes.narrow.sm};
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.isSeparator ? props.theme.ui.fontSizes.narrow.md : props.theme.ui.fontSizes.narrow.sm};
  }
`

const StyledItemHeader = styled.div`
  width: 100%;
  min-height: 30px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledItemHeaderTitle = styled.p`
  font-family: 'Lato Bold', sans-serif;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  color: ${props => props.theme.ui.colors.text.primary};
    // @media (${screenWidth.mediumWidth}) {
  //   font-size: 16px;
  // }
`


const ListItem = ({isSectionSeparator, itemHeader, itemLeft, itemRight, onClick, className}: ListItemProps) => {
    return (
        <StyledListItem isSeparator={isSectionSeparator} onClick={onClick} hasClick={!!onClick} className={className}>
            {
                itemHeader && (
                    <StyledItemHeader>
                        <StyledItemHeaderTitle>
                            {itemHeader.title}
                        </StyledItemHeaderTitle>
                        {itemHeader.headerRight && (
                            itemHeader.headerRight
                        )}
                    </StyledItemHeader>
                )
            }
            <StyledListItemContent>
                {
                    itemLeft && (
                        <StyledItemSection fullWidth={!!itemLeft && !itemRight} isSeparator={isSectionSeparator}>
                            {itemLeft}
                        </StyledItemSection>
                    )
                }
                {
                    itemRight && (
                        <StyledItemSection style={{justifyContent: 'flex-end'}}>
                            {itemRight}
                        </StyledItemSection>
                    )
                }
            </StyledListItemContent>
        </StyledListItem>
    )
}

export default ListItem
