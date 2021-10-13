import ListItem from "../../../UI/Common/ListItem/ListItem";
import {BiPlus} from "react-icons/all";
import ThemeSelector from "./ThemeSelector";
import {PageNavigatorProvider} from "../../../Providers/PageNavigatorProvider";


const Settings = () => {
    const existingPages = ['Settings', 'Language', 'AddProfile']

    return (
        <PageNavigatorProvider existingPages={existingPages}>
            <ListItem isSectionSeparator={true} itemLeft="General"/>
            <ListItem itemLeft="Language"/>
            <ListItem itemLeft="Theme" itemRight={<ThemeSelector/>}/>
            <ListItem itemLeft="Passcode"/>
            <ListItem itemLeft="Seguro Drive"/>
            <ListItem isSectionSeparator={true} itemLeft="My Account"/>
            <ListItem itemHeader={{
                title: "Profiles",
                headerRight: <BiPlus/>
            }}
            />
        </PageNavigatorProvider>
    )
}

export default Settings