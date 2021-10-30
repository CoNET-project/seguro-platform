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
import DeviceList, {Device} from "./SettingSections/DeviceList";
import SubscriptionPlan from "./SettingSections/SubscriptionPlan";
import DeviceCodes from "./SettingSections/DeviceCodes";
import {screenWidth} from "../../../UI/screenSizes";

const StyledSettingsContent = styled.div`
  height: 100%;
`

const StyledSettingsContentSection = styled.div`
  margin: 0 2.5px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  @media (${screenWidth.mediumWidth}) {
    margin: 0 30px;
  }
`

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const StyledNumberBox = styled.span`
  background-color: ${props => props.theme.ui.backgroundAccent};
  padding: 2px 6px;
  border-radius: 5px;
  content: '';
  border: 1px solid rgba(200, 200, 200, 0.3);
  margin-right: 2.5px;

  @media (${screenWidth.mediumWidth}) {
    font-size: 13px;
  }
`

const StyledActivateDevice = styled.p`
  @media (${screenWidth.mediumWidth}) {
    font-size: 13px;
  }
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

    const exampleDevices = (): Array<Device> => {
        return [
            {
                type: 'mobile',
                deviceId: 'iPhone-MG182736',
                onDelete: () => {
                }
            },
            {
                type: 'tablet',
                deviceId: 'Android-M817276',
                onDelete: () => {
                }
            }
        ]
    }

    const exampleDeviceCodes = ['9d7edca7-52cf-44c2-a904-c2baa7b280']

    return (
        <StyledSettingsContent>
            <CustomizedHeaderBar headerContent={{title: getHeaderBarTitle()}}
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

                            <StyledSettingsContentSection>
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
                            </StyledSettingsContentSection>
                            <ListItem isSectionSeparator={true}
                                      itemLeft={<FormattedMessage id='platform.settings.myAccount'/>}
                            />

                            <StyledSettingsContentSection>
                                <ListItem
                                    itemHeader={{
                                        title: <FormattedMessage id='platform.settings.profile'/>,
                                        headerRight: <BiPlus/>
                                    }}
                                    itemLeft={<ProfileList/>}

                                />

                                <ListItem
                                    itemHeader={{
                                        title: <FormattedMessage id='platform.settings.devices'/>
                                    }}
                                    itemLeft={<DeviceList devices={exampleDevices()}/>}
                                />

                                <ListItem
                                    itemHeader={{
                                        title: <FormattedMessage id='platform.settings.deviceCodes'/>,
                                        headerRight: (
                                            <>
                                                <StyledActivateDevice>
                                                    <StyledNumberBox>2</StyledNumberBox>{' '}
                                                    <FormattedMessage id='platform.settings.activeCodes'/>
                                                </StyledActivateDevice>
                                            </>
                                        )
                                    }}
                                    itemLeft={<DeviceCodes deviceCodes={exampleDeviceCodes}/>}
                                />

                                <ListItem
                                    itemHeader={{
                                        title: <FormattedMessage id='platform.settings.subscriptionPlan'/>
                                    }}
                                    itemLeft={<SubscriptionPlan/>}
                                />
                            </StyledSettingsContentSection>

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
