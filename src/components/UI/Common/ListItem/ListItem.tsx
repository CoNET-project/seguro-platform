import styled from "styled-components";
import {ReactNode} from "react";

type ListItemProps = {
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
    isSeparator: boolean | undefined
}

const StyledListItem = styled.div<StyledListItemProps>`
  width: 100%;
  min-height: 60px;
  background-color: ${props => props.isSeparator ? props.theme.ui.backgroundAccent : props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.text.textPrimary};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  font-weight: ${props => props.isSeparator ? 700 : 'unset'};
`

const StyledListItemContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledItemSection = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
`

const StyledItemHeader = styled.div`
  width: 100%;
  min-height: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledItemHeaderTitle = styled.p`
  font-size: 14px;
  color: ${props => props.theme.ui.text.textPrimary}
`


const ListItem = ({isSectionSeparator, itemHeader, itemLeft, itemRight, onClick}: ListItemProps) => {
    return (
        <StyledListItem isSeparator={isSectionSeparator} onClick={onClick}>
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
                        <StyledItemSection>
                            {itemLeft}
                        </StyledItemSection>
                    )
                }
                {
                    itemRight && (
                        <StyledItemSection>
                            {itemRight}
                        </StyledItemSection>
                    )
                }
            </StyledListItemContent>
        </StyledListItem>
    )
}

export default ListItem