import ThreePanels, {ThreePanelComponents} from "../../../UI/Layout/ThreePanelLayout/ThreePanels";
import useAppState from "../../../../store/appState/useAppState";
import LeftPanel from "./Panels/LeftPanel";
import RightPanel from "./Panels/RightPanel";
import MainPanel from "./Panels/MainPanel";

const Messenger = () => {
    const {currentFocusPanel} = useAppState()
    const contents: ThreePanelComponents = {
        leftPanelComponent: <LeftPanel/>,
        mainPanelComponent: <MainPanel/>,
        rightPanelComponent: <RightPanel/>
    }
    return (
        <ThreePanels components={contents} currentPanel={currentFocusPanel}/>
    )
}

export default Messenger
