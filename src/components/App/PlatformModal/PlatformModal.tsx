import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import Settings from "./Settings/Settings";

const PlatformModal = () => {
    const appState = useAppState()

    return (
        <Modal
            closeAction={() => {
                appState.setIsSettingsOpen(false)
            }}
        >
            <Settings/>
        </Modal>
    )
}

export default PlatformModal