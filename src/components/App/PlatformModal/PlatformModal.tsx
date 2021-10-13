import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import Settings from "./Settings/Settings";

const PlatformModal = () => {
    const appState = useAppState()

    return (
        <Modal
            title="Platform Settings"
            closeAction={() => {
                appState.setIsModalOpen(false)
            }}
        >
            <Settings/>
        </Modal>
    )
}

export default PlatformModal