import ThreePanels, {ThreePanelComponents} from "../../../UI/Layout/ThreePanelLayout/ThreePanels"
import LeftPanel from "./Panels/LeftPanel"
import RightPanel from "./Panels/RightPanel"
import MainPanel from "./Panels/MainPanel"
import {MessengerContext} from "../../../../contexts/messenger/MessengerContext"
import React, {useEffect} from "react"
import {messengerReducer, MessengerState} from "../../../../contexts/messenger/messengerReducer"
import {messengerActions} from "../../../../contexts/messenger/messengerActions"

const GuildShow = () => {
    const contents: ThreePanelComponents = {
        leftPanelComponent: <LeftPanel/>,
        mainPanelComponent: <MainPanel/>,
        rightPanelComponent: <RightPanel/>
    }

    const defaultMessengerState: MessengerState = {
        contacts: {},
        selectedContact: null,
        currentChat: null,
        currentFocusPanel: 'left'
    }

    const [state, dispatch] = React.useReducer(messengerReducer, defaultMessengerState)

    return (

		<MessengerContext.Provider value={{state, dispatch}}>
			<ThreePanels components={contents} currentPanel={state.currentFocusPanel}/>
		</MessengerContext.Provider>

    )
}

export default GuildShow
