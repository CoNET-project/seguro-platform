import ListItem from "../../../UI/Common/ListItem/ListItem";
import {BiPlus} from "react-icons/all";
import ThemeSelector from "./ThemeSelector";
import {ReactNode, useState} from "react";
import SelectLanguage from "./SelectLanguage";

type SettingSubModals = 'Language' | null

type SettingsProps = {
    attachSubModal: (title: ReactNode | string) => void,
    unmountSubModal: () => void
}

const LanguageSettings = () => {
    return (
        <SelectLanguage/>
    )
}

const Settings = ({attachSubModal, unmountSubModal}: SettingsProps) => {
    const [submodal, setCurrentSubmodal] = useState<ReactNode>(null)

    const mountSubModal = (submodal: SettingSubModals) => {
        attachSubModal(submodal)
        setCurrentSubmodal(LanguageSettings)
    }

    return (
        <>
            {submodal ? <LanguageSettings/> : <>
                <ListItem isSectionSeparator={true} itemLeft="General"/>
                <ListItem itemLeft="Language" onClick={() => mountSubModal('Language')}/>
                <ListItem itemLeft="Theme" itemRight={<ThemeSelector/>}/>
                <ListItem itemLeft="Passcode"/>
                <ListItem itemLeft="Seguro Drive"/>
                <ListItem isSectionSeparator={true} itemLeft="My Account"/>
                <ListItem itemHeader={{
                    title: "Profiles",
                    headerRight: <BiPlus/>
                }}
                />
            </>}
        </>
    )
}

export default Settings