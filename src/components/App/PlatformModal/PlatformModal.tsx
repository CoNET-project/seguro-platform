import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import Settings from "./Settings/Settings";
import ManageProfile from "./ManageProfile/ManageProfile";

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
                isModalOpen === 'manageProfile' && <ManageProfile/>
            }
        </Modal>
    )
}

export default PlatformModal
