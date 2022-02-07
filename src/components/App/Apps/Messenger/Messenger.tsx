import ThreePanels, {ThreePanelComponents} from "../../../UI/Layout/ThreePanelLayout/ThreePanels";
import useAppState from "../../../../store/appState/useAppState";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import MainPanel from "./Panels/MainPanel";
import {MessengerContext} from "../../../../contexts/messenger/MessengerContext";
import React, {useEffect} from "react";
import {messengerReducer, MessengerState} from "../../../../contexts/messenger/messengerReducer";
import {messengerActions} from "../../../../contexts/messenger/messengerActions";
import {exampleContacts} from "./ExampleContacts";

const Messenger = () => {
    const {currentFocusPanel} = useAppState()
    const contents: ThreePanelComponents = {
        leftPanelComponent: <LeftPanel/>,
        mainPanelComponent: <MainPanel/>,
        rightPanelComponent: <RightPanel/>
    }

    const defaultMessengerState: MessengerState = {
        contacts: {}
    }

    const [state, dispatch] = React.useReducer(messengerReducer, defaultMessengerState)

    useEffect(() => {
        dispatch(messengerActions.setInitialContacts(exampleContacts))
    }, [])

    return (
        <>
            <MessengerContext.Provider value={{state, dispatch}}>
                <ThreePanels components={contents} currentPanel={currentFocusPanel}/>
            </MessengerContext.Provider>
        </>
    )
}

export default Messenger
