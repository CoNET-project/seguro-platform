import styled from "styled-components";
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../store/appState/useAppState";
import {screenWidth} from "../../../UI/screenSizes";
import ListItem from "../../../UI/Common/ListItem/ListItem";
import Image from "../../../UI/Common/Profile/Image/Image";
import AnonymousAvatar from '../../../../assets/Avatar-anonymous.png'
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import {Profiles} from "../../../UI/Dropdowns/ProfileDropdown/ProfileDropdown";
import {TippyDropdown} from "../../../UI/Tippy/Tippy";
import {ReactNode, useState} from "react";
import {ChevronLeft, VerticalOptions} from "../../../UI/Icons/Icons";
import {PageNavigatorProvider} from "../../../Providers/PageNavigatorProvider";
import {usePageNavigator} from "../../../../contexts/pageNavigator/PageNavigatorContext";
import {AnimatePresence} from "framer-motion";
import MotionWrapper from "../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../UI/Motion/Variants/Variants";
import ManageProfile from "./Pages/ManageProfile";
import DeleteProfile from "./Pages/DeleteProfile";
import {pageNavigator} from "../../../../contexts/pageNavigator/pageNavigatorActions";
import {FormattedMessage} from "react-intl";
import {ProfileData} from "../../../../store/appState/appStateReducer";

const StyledManagesProfileContainer = styled.div`
  width: 100%;

  @media (${screenWidth.mediumWidth}) {
    min-width: 30rem;
  }
`

const StyledManageProfilesContent = styled.div`
  background-color: ${props => props.theme.ui.backgroundColor};
`

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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

const StyledDropdown = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const StyledDropdownItem = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  padding: 10px 15px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.ui.borderColor};
  }
`

const StyledDropdownText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  color: ${props => props.theme.ui.text.textPrimary}
`

export type ProfileDropdownActions = {
    text: ReactNode | string,
    action: () => void
}

type ProfileDropdownProps = {
    buttons: Array<ProfileDropdownActions>
}

const ProfileDropdown = ({buttons}: ProfileDropdownProps) => {
    return (
        <StyledDropdown>
            {buttons.map((button, idx) => (
                <StyledDropdownItem onClick={button.action} key={idx}>
                    <StyledDropdownText>
                        {button.text}
                    </StyledDropdownText>
                </StyledDropdownItem>
            ))}
        </StyledDropdown>
    )
}

const ProfileItem = ({
                         imageSrc,
                         nickname,
                         keyid,
                         current,
                         primary
                     }: ProfileData & { current?: boolean, primary?: boolean }) => {
    return (
        <StyledProfileItem>
            <Image src={imageSrc || AnonymousAvatar} size={50}/>
            <StyledProfileItemDetail>
                <StyledProfileItemName>{nickname || 'Anonymous User'}</StyledProfileItemName>
                <StyledProfileItemKeyId>{keyid}</StyledProfileItemKeyId>
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

    const profileDropdownButtons: Array<ProfileDropdownActions> = [
        {
            text: 'Manage',
            action: () => {
                setCurrentSelectedProfileIndex(currentDropdownIndex)
                dispatch(pageNavigator.navigateToPage('Manage Profile'))
            }
        },
        {
            text: 'Delete',
            action: () => {
                dispatch(pageNavigator.navigateToPage('Delete Profile'))
            }
        }
    ]

    const onUpdateProfile = (profileData: ProfileData) => {
        setCurrentDropdownIndex(null)

        const currentIndex = currentSelectedProfileIndex

        if (currentIndex !== null) {
            updateClientProfiles(currentIndex, profileData)
            setCurrentSelectedProfileIndex(null)
        }

        dispatch(pageNavigator.navigateToPage('Manage Profiles'))
    }

    const onDeleteProfile = (keyId: string) => {
        setCurrentDropdownIndex(null)
        dispatch(pageNavigator.navigateToPage('Manage Profiles'))
        deleteClientProfile(keyId)
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
                return currentPage
            case currentPage === 'Manage Profile':
                return currentPage
            case currentPage === 'Delete Profile':
                return currentPage
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
                                {clientProfiles.map((profile, idx) => (
                                    <ListItem
                                        key={profile.keyid + idx}
                                        itemLeft={<ProfileItem {...profile} current={true} primary={true}/>}
                                        itemRight={
                                            <TippyDropdown content={<ProfileDropdown buttons={profileDropdownButtons}/>}
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
                            profile={clientProfiles[currentDropdownIndex || 0]}/>
                    )
                }

                {
                    currentPage === 'Delete Profile' && (
                        <DeleteProfile custom={direction} profile={clientProfiles[currentDropdownIndex || 0]}
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
