import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import Settings from "./Settings/Settings";
import ManageProfiles from "./ManageProfiles/ManageProfiles";
import AddProfile from "./AddProfile/AddProfile";

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
            {
                isModalOpen === 'addProfile' && <AddProfile/>
            }
        </Modal>
    )
}

export default PlatformModal
