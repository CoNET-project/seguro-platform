import ListItem from "../../../UI/Common/ListItem/ListItem";
import {BiPlus} from "react-icons/all";
import ThemeSelector from "./ThemeSelector";
import {PageNavigatorProvider} from "../../../Providers/PageNavigatorProvider";
import {usePageNavigator} from "../../../../contexts/pageNavigator/PageNavigatorContext";
import Language from "./Pages/Language";
import {pageNavigator} from "../../../../contexts/pageNavigator/pageNavigatorActions";
import {AnimatePresence, motion} from "framer-motion";
import styled from "styled-components";
import MotionWrapper from "../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../UI/Motion/Variants/Variants";
import {ChevronLeft, ChevronRight} from "../../../UI/Icons/Icons";
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../store/appState/useAppState";
import {FormattedMessage} from "react-intl";
import ProgressBar from "../../../UI/Progress/ProgressBar/ProgressBar";
import SeguroDrive from "./SettingSections/SeguroDrive";
import ProfileList from "./SettingSections/ProfileList";

const StyledSettingsContent = styled.div`
    height: 100%
`

const SettingsContent = () => {
    const {setIsSettingsOpen} = useAppState()
    const {state, dispatch} = usePageNavigator()
    const [currentPage, direction] = state.current
    console.log(currentPage)

    const getHeaderBarTitle = () => {
        switch (true) {
            case currentPage === 'Platform Settings':
                return <FormattedMessage id='platform.settings.settings'/>
            case currentPage === 'Language':
                return <FormattedMessage id='platform.settings.language'/>
            default:
                break;
        }
    }
    return (
        <StyledSettingsContent>
            <HeaderBar headerContent={{title: getHeaderBarTitle()}}
                       closeAction={{
                           action: () => {
                               if (currentPage !== 'Platform Settings') {
                                   return dispatch(pageNavigator.navigateToPage('Platform Settings'))
                               }
                               return setIsSettingsOpen(false)
                           },
                           alignRight: currentPage === 'Platform Settings',
                           icon: currentPage !== 'Platform Settings' ? <ChevronLeft/> : undefined,
                           alwaysVisible: true
                       }}/>
            <AnimatePresence custom={direction}>
                {
                    currentPage === 'Platform Settings' && (

                        <MotionWrapper runInitialAnimation={direction === -1} custom={direction}
                                       name={currentPage}
                                       variants={pageTransitionVariants}>

                            <ListItem isSectionSeparator={true}
                                      itemLeft={<FormattedMessage id='platform.settings.general'/>}/>

                            <ListItem itemLeft={<FormattedMessage id='platform.settings.language'/>}
                                      itemRight={<ChevronRight/>}
                                      onClick={() => dispatch(pageNavigator.navigateToPage('Language'))}
                            />

                            <ListItem itemLeft={<FormattedMessage id='platform.settings.theme'/>}
                                      itemRight={<ThemeSelector/>}
                            />

                            <ListItem itemLeft={<FormattedMessage id='platform.settings.passcode'/>}/>

                            <ListItem
                                itemLeft={
                                    <SeguroDrive/>
                                }/>

                            <ListItem isSectionSeparator={true}
                                      itemLeft={<FormattedMessage id='platform.settings.myAccount'/>}
                            />

                            <ListItem
                                itemHeader={{
                                    title: <FormattedMessage id='platform.settings.profile'/>,
                                    headerRight: <BiPlus/>
                                }}
                                itemLeft={<ProfileList/>}

                            />

                            <ListItem itemHeader={{
                                title: 'Devices'
                            }}/>

                            <ListItem itemHeader={{
                                title: 'Subscription Plans'
                            }}/>

                            <ListItem itemHeader={{
                                title: 'Subscription Plans'
                            }}/>

                            <ListItem itemHeader={{
                                title: 'Subscription Plans'
                            }}/>

                        </MotionWrapper>
                    )}
                {
                    currentPage === 'Language' && (
                        <Language custom={direction}/>
                    )
                }
            </AnimatePresence>
        </StyledSettingsContent>
    )
}


const Settings = () => {
    const existingPages = ['Platform Settings', 'Language', 'Add Profile']

    return (
        <PageNavigatorProvider existingPages={existingPages}>
            <SettingsContent/>
        </PageNavigatorProvider>
    )
}

export default Settings