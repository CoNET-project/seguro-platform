import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import Settings from "./Settings/Settings";
import ManageProfiles from "./ManageProfiles/ManageProfiles";

const PlatformModal = () => {
    const {isModalOpen, setIsModalOpen} = useAppState()

    return (
        <Modal
            closeAction={() => {
                setIsModalOpen(null)
            }}
        >
            {
                isModalOpen === 'settings' && <Settings/>
            }
            {
                isModalOpen === 'manageProfile' && <ManageProfiles/>
            }
        </Modal>
    )
}

export default PlatformModal
