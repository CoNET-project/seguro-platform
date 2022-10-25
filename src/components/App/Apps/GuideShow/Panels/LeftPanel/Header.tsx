import styled from "styled-components"
import HeaderBar from "../../../../../UI/Common/HeaderBar/HeaderBar"
import {usePageNavigator} from "../../../../../../contexts/pageNavigator/PageNavigatorContext"
import {AddContact, ChevronLeft, CreateChat} from "../../../../../UI/Icons/Icons"
import React, {ReactNode, useEffect, useState} from "react"
import {FormattedMessage} from "react-intl"
import {pageNavigator} from "../../../../../../contexts/pageNavigator/pageNavigatorActions"

type HeaderProps = {
    onClick?: () => void
}


type Icons = {
    [id: string]: ReactNode
}

const StyledHeaderBar = styled(HeaderBar)`
	font-weight: bolder;

	* > p {
		font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 2px)
	}
`

const StyledHeaderButton = styled.button`
	padding: 5px;
	border: none;
	background-color: transparent;
	color: ${props => props.theme.ui.colors.text.secondary};
`

const Header = ({onClick}: HeaderProps) => {
    const {state, dispatch} = usePageNavigator()
    const [rootPageId, setRootPageId] = useState<string | null>(null)

    useEffect(() => {
        const pageIdArray = state.current[0]?.split('/')
        if (pageIdArray.length > 1) {
            setRootPageId(pageIdArray[0])
        }
    }, [state])

    const getPageTitle = () => {
        const pageIdArray = state.current[0]?.split('/')
        return pageIdArray[pageIdArray.length - 1]
    }

    const icons: Icons = {
        'Chats': <CreateChat size={18}/>,
        'Contacts': <AddContact size={18}/>
    }

    return (
        <StyledHeaderBar
            headerContent={{
                title: <FormattedMessage id='tabnavigator.guide.title'/>
            }}
            headerComponents={{
                headerRight: [],
                headerLeft: null
            }}
        />
    )
}

export default Header