import ListItem from "../../../UI/Common/ListItem/ListItem"
import ThemeSelector from "./ThemeSelector"
import {PageNavigatorProvider} from "../../../Providers/PageNavigatorProvider";
import {usePageNavigator} from "../../../../contexts/pageNavigator/PageNavigatorContext"
import Language from "./Pages/Language"
import {pageNavigator} from "../../../../contexts/pageNavigator/pageNavigatorActions"
import {AnimatePresence} from "framer-motion"
import styled from "styled-components"
import MotionWrapper from "../../../UI/Motion/MotionWrapper"
import {pageTransitionVariants} from "../../../UI/Motion/Variants/Variants"
import {ChevronLeft, ChevronRight} from "../../../UI/Icons/Icons"
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar"
import useAppState from "../../../../store/appState/useAppState"
import {FormattedMessage} from "react-intl"
import SeguroDrive from "./SettingSections/SeguroDrive"
import DeviceList from "./SettingSections/DeviceList"
import SubscriptionPlan from "./SettingSections/SubscriptionPlan"
import DeviceCodes from "./SettingSections/DeviceCodes"
import {screenHeight, screenWidth} from "../../../UI/screenSizes"
import Passcode from "./Pages/Passcode"
import DeviceDelete from "./Pages/DeviceDelete"
import React, {useState} from "react"

const StyledSettingsContainer = styled.div`
	height: 100%;
	min-width: 100%;
	@media (${screenWidth.narrowWidth}) {
		min-width: 35rem;
	}

	@media (${screenWidth.wideWidth}) {
		min-width: 50rem;
	}

	@media (${screenHeight.shortHeight}) and (${screenWidth.narrowWidth}) {
		height: 35rem;
	}
`

const StyledSettingsContentSection = styled.div`
	margin: 0 2.5px;
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	@media (${screenWidth.mediumWidth}) {
		margin: 0 30px 30px 30px;
	}
`

const CustomizedHeaderBar = styled(HeaderBar)`
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
	background-color: ${props => props.theme.ui.colors.background.foundation};

	& > * #headerTitle {
		font-size: ${props => props.theme.ui.fontSizes.narrow.md};
		font-weight: 700;
	}
`

const StyledNumberBox = styled.span`
	background-color: ${props => props.theme.ui.colors.background.foundation};
	padding: 2px 6px;
	border-radius: 5px;
	content: '';
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	margin-right: 2.5px;
`

const StyledActivateDevice = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	color: ${props => props.theme.ui.colors.text.primary};
	border-radius: 5px;
	display: flex;
	align-items: center;

	& > *:last-child {
		margin-left: 10px;
	}
`


const SettingsContent = () => {
	
    const {setIsModalOpen, clientDevices, deleteClientDevice} = useAppState()
    const {state, dispatch} = usePageNavigator()
    const [deviceToDeleteId, setDeviceToDeleteId] = useState<string | null>(null)
    const [currentPage, direction] = state.current

    const getHeaderBarTitle = () => {
        switch (true) {
            case currentPage === 'Platform Settings':
                return <FormattedMessage id='platform.settings.settings'/>
            case currentPage === 'Language':
                return <FormattedMessage id='platform.settings.language'/>
            case currentPage === 'Passcode':
                return currentPage
            case currentPage === 'Delete Device':
                return currentPage
            default:
                break;
        }
    }


    const onDeviceDelete = (deviceId: string) => {
        setDeviceToDeleteId(deviceId)
        dispatch(pageNavigator.navigateToPage('Delete Device'))
    }

    const onDeviceCancelDelete = () => {
        setDeviceToDeleteId(null)
        dispatch(pageNavigator.navigateToPage('Platform Settings'))
    }

    const onDeviceConfirmDelete = () => {
        const deviceIdToDelete = deviceToDeleteId
        if (deviceIdToDelete) {
            deleteClientDevice(deviceIdToDelete)
        }
        setDeviceToDeleteId(null)
        dispatch(pageNavigator.navigateToPage('Platform Settings'))
    }

    const exampleDeviceCodes = ['9d7edca7-52cf-44c2-a904-c2baa7b280']

    return (
        <StyledSettingsContainer>
            
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

                                {/*<ListItem*/}
                                {/*    onClick={() => dispatch(pageNavigator.navigateToPage('Passcode'))}*/}
                                {/*    itemLeft={<FormattedMessage id='platform.settings.passcode'/>}*/}
                                {/*    itemRight={*/}
                                {/*        <StyledButton>*/}
                                {/*            <FormattedMessage id='platform.settings.passcode.edit'/>*/}
                                {/*            <ChevronRight/>*/}
                                {/*        </StyledButton>*/}
                                {/*    }/>*/}

                                <ListItem
                                    itemLeft={
                                        <SeguroDrive/>
                                    }/>
                            </StyledSettingsContentSection>
                            <ListItem isSectionSeparator={true}
                                      itemLeft={<FormattedMessage id='platform.settings.myAccount'/>}
                            />

                            <StyledSettingsContentSection>
                                {/*<ListItem*/}
                                {/*    itemHeader={{*/}
                                {/*        title: <FormattedMessage id='platform.settings.profile'/>,*/}
                                {/*        headerRight: <BiPlus/>*/}
                                {/*    }}*/}
                                {/*    itemLeft={<ProfileList/>}*/}

                                {/*/>*/}

                                <ListItem
                                    itemHeader={{
                                        title: <FormattedMessage id='platform.settings.devices'/>
                                    }}
                                    itemLeft={<DeviceList devices={clientDevices} onDeviceDelete={onDeviceDelete}/>}
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
                {
                    currentPage === 'Passcode' && (
                        <Passcode custom={direction}/>
                    )
                }
                {
                    currentPage === 'Delete Device' && (
                        <DeviceDelete custom={direction}
                                      device={deviceToDeleteId ? clientDevices[deviceToDeleteId] : undefined}
                                      onCancel={onDeviceCancelDelete} onConfirm={onDeviceConfirmDelete}/>
                    )
                }
            </AnimatePresence>
        </StyledSettingsContainer>
    )
}


const Settings = () => {
    const existingPages = ['Platform Settings', 'Language', 'Passcode', 'Delete Device']

    return (
        <PageNavigatorProvider existingPages={existingPages}>
            <SettingsContent/>
        </PageNavigatorProvider>
    )
}

export default Settings
