import Modal, {SubModal} from "../../UI/Common/Modal/Modal";
import useAppState from "../../../store/appState/useAppState";
import ListItem from "../../UI/Common/ListItem/ListItem";
import Settings from "./Settings/Settings";
import {ReactNode, useState} from "react";

export type ModalPages = 'settings'

type PlatformModalProps = {
    page: ModalPages
}

const PlatformModal = () => {
    const appState = useAppState()
    const [subModal, setSubModal] = useState<SubModal | undefined>(undefined)

    const unmountSubModal = () => {
        setSubModal(undefined)
    }

    const attachSubModal = (title: ReactNode | string) => {
        setSubModal({
            title: title,
            closeAction: unmountSubModal
        })
    }

    return (
        <Modal
            title="Platform Settings"
            closeAction={() => {
                appState.setIsModalOpen(false)
            }}
            subModal={subModal}
        >
            <Settings attachSubModal={attachSubModal} unmountSubModal={unmountSubModal}/>
        </Modal>
    )
}

export default PlatformModal