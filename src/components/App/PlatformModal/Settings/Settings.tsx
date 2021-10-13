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

const StyledSettingsContent = styled.div``

const StyledSeguroDrive = styled.div`
  width: 100%;
  padding-top: 5px;
`

const StyledSeguroDriveUsage = styled.p`
  font-size: 14px;
  margin-top: 7.5px;
  color: ${props => props.theme.ui.text.textSecondary}
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
                                itemHeader={{
                                    title: 'Seguro Drive'
                                }}
                                itemLeft={
                                    <StyledSeguroDrive>
                                        <ProgressBar progress={30}/>
                                        <StyledSeguroDriveUsage>5 GB of 30 GB used</StyledSeguroDriveUsage>
                                    </StyledSeguroDrive>
                                }/>

                            <ListItem isSectionSeparator={true}
                                      itemLeft={<FormattedMessage id='platform.settings.myAccount'/>}
                            />

                            <ListItem itemHeader={{
                                title: <FormattedMessage id='platform.settings.profile'/>,
                                headerRight: <BiPlus/>
                            }}
                            />

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