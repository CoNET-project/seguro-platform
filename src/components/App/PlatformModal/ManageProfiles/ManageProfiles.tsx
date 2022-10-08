import styled from "styled-components"
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar"
import useAppState from "../../../../store/appState/useAppState"
import {screenWidth} from "../../../UI/screenSizes"
import ListItem from "../../../UI/Common/ListItem/ListItem"
import Image from "../../../UI/Common/Profile/Image/Image"
// @ts-ignore: Unreachable code error
import AnonymousAvatar from '../../../../assets/Avatar-anonymous.png'
import {TippyDropdown} from "../../../UI/Tippy/Tippy";
import React, {useState} from "react"
import {ChevronLeft, VerticalOptions} from "../../../UI/Icons/Icons"
import {PageNavigatorProvider} from "../../../Providers/PageNavigatorProvider"
import {usePageNavigator} from "../../../../contexts/pageNavigator/PageNavigatorContext"
import {AnimatePresence} from "framer-motion"
import MotionWrapper from "../../../UI/Motion/MotionWrapper"
import {pageTransitionVariants} from "../../../UI/Motion/Variants/Variants"
import ManageProfile from "./Pages/ManageProfile"
import DeleteProfile from "./Pages/DeleteProfile"
import {pageNavigator} from "../../../../contexts/pageNavigator/pageNavigatorActions"
import {FormattedMessage} from "react-intl"
import ContextMenu, {ContextMenuActions} from "../../../UI/Common/ContextMenu/ContextMenu"
import {ProfileData} from "../../../../store/appState/appStateReducer"

const StyledManagesProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.ui.colors.background.foundation};

  @media (${screenWidth.mediumWidth}) {
    min-width: 30rem;
  }
`

const StyledManageProfilesContent = styled.div`
`

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.ui.colors.background.foundation};

  & > * #headerTitle {
    font-size: ${props => props.theme.ui.fontSizes.narrow.md};
    font-weight: 700;
  }
`

const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;
`

const StyledProfileItemDetail = styled.div`
  margin-left: 15px;
`

const StyledProfileItemName = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 1.5px);
  font-weight: bold;
`

const StyledProfileItemKeyId = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.xsm} + 1px);
`

const StyledProfileItemOptions = styled.button`
  padding: 3px;
  border: none;
  background-color: transparent;
`

const ProfileItem = ({
                         profileImg,
                         nickname,
                         keyID,
                         current,
                         primary
                     }: ProfileData & { current?: boolean, primary?: boolean }) => {
    return (
        <StyledProfileItem>
            <Image src={profileImg || AnonymousAvatar} size={50}/>
            <StyledProfileItemDetail>
                <StyledProfileItemName>{nickname || 'Anonymous User'}</StyledProfileItemName>
                <StyledProfileItemKeyId>{keyID}</StyledProfileItemKeyId>
            </StyledProfileItemDetail>
        </StyledProfileItem>
    )
}

const ManageProfilesContent = () => {

    const {setIsModalOpen, clientProfiles, updateClientProfiles, deleteClientProfile} = useAppState()

    const {state, dispatch} = usePageNavigator()

    const [currentPage, direction] = state.current

    const [currentDropdownIndex, setCurrentDropdownIndex] = useState<number | null>(null)

    const [currentSelectedProfileIndex, setCurrentSelectedProfileIndex] = useState<number | null>(null)

    const profileContextMenuButtons: Array<ContextMenuActions> = [
        {
            text: <FormattedMessage id='platform.contextMenu.manage'/>,
            action: () => {
                setCurrentSelectedProfileIndex(currentDropdownIndex)
                dispatch(pageNavigator.navigateToPage('Manage Profile'))
            }
        }
    ]

    const onUpdateProfile = (profileData: ProfileData) => {
        setCurrentDropdownIndex(null)

        updateClientProfiles(profileData)
        setCurrentSelectedProfileIndex(null)

        dispatch(pageNavigator.navigateToPage('Manage Profiles'))
    }

    const onDeleteProfile = (keyId: string) => {
        deleteClientProfile(keyId)
        setCurrentDropdownIndex(null)
        dispatch(pageNavigator.navigateToPage('Manage Profiles'))
    }

    const onBack = () => {
        setCurrentDropdownIndex(null)
        dispatch(pageNavigator.navigateToPage('Manage Profiles'))
    }

    const dropdownHandler = (index: number) => {
        if (currentDropdownIndex === index) {
            return setCurrentDropdownIndex(null)
        }
        setCurrentDropdownIndex(index)
    }

    const getHeaderBarTitle = () => {
        switch (true) {
            case currentPage === 'Manage Profiles':
                return <FormattedMessage id='platform.manageProfiles'/>
            case currentPage === 'Manage Profile':
                return <FormattedMessage id='platform.manageProfile'/>
            case currentPage === 'Delete Profile':
                return <FormattedMessage id='platform.manageProfiles.deleteProfile'/>
            default:
                break;
        }
    }

    return (
        <StyledManagesProfileContainer>
            <CustomizedHeaderBar headerContent={{title: getHeaderBarTitle()}}
                                 closeAction={{
                                     action: () => {
                                         if (currentPage !== 'Manage Profiles') {
                                             setCurrentDropdownIndex(null)
                                             return dispatch(pageNavigator.navigateToPage('Manage Profiles'))
                                         }
                                         return setIsModalOpen(null)
                                     },
                                     alignRight: currentPage === 'Manage Profiles',
                                     icon: currentPage !== 'Manage Profiles' ? <ChevronLeft/> : undefined,
                                     alwaysVisible: true
                                 }}
            />
            <AnimatePresence custom={direction}>
                {
                    currentPage === 'Manage Profiles' && (
                        <MotionWrapper runInitialAnimation={direction === -1} custom={direction}
                                       name={currentPage}
                                       variants={pageTransitionVariants}>
                            <StyledManageProfilesContent>
                                {Object.values(clientProfiles).map((profile, idx) => (
                                    <ListItem
                                        key={profile.keyID + idx}
                                        itemLeft={<ProfileItem {...profile} current={true} primary={true}/>}
                                        itemRight={
                                            <TippyDropdown content={<ContextMenu buttons={profileContextMenuButtons}/>}
                                                           visible={currentDropdownIndex === idx}
                                                           onClickOutside={(instance => {
                                                               instance.hide();
                                                               setCurrentDropdownIndex(null)
                                                           })}>
                                                <StyledProfileItemOptions onClick={() => dropdownHandler(idx)}>
                                                    <VerticalOptions/>
                                                </StyledProfileItemOptions>
                                            </TippyDropdown>
                                        }
                                    />
                                ))}
                            </StyledManageProfilesContent>
                        </MotionWrapper>
                    )
                }

                {
                    currentPage === 'Manage Profile' && (
                        <ManageProfile
                            custom={direction}
                            onUpdate={onUpdateProfile}
                            profile={Object.values(clientProfiles)[currentDropdownIndex || 0]}/>
                    )
                }

                {
                    currentPage === 'Delete Profile' && (
                        <DeleteProfile custom={direction}
                                       profile={Object.values(clientProfiles)[currentDropdownIndex || 0]}
                                       onDelete={onDeleteProfile} onBack={onBack}/>
                    )
                }

            </AnimatePresence>
        </StyledManagesProfileContainer>
    )
}

const ManageProfiles = () => {

    const existingPages = ['Manage Profiles', 'Manage Profile', 'Delete Profile']

    return (
        <PageNavigatorProvider existingPages={existingPages}>
            <ManageProfilesContent/>
        </PageNavigatorProvider>
    )
}

export default ManageProfiles
