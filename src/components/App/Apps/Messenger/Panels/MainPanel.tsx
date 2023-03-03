import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar"
import {ChevronLeft, ChevronRight, SendIcon} from "../../../../UI/Icons/Icons"
import ProfileImage from "../../../../UI/Common/Profile/Image/Image"
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext"
import {trimToLength} from "../../../../../utilities/utilities"
import React, {HTMLAttributes, useState, useEffect} from "react"
import {getWorkerService} from '../../../../../services/workerService/workerService'
import {FormattedMessage} from "react-intl"
import {Contact} from "../../../../../contexts/messenger/messengerActions"
import TextField from '@mui/material/TextField'
const StyledMainPanel = styled.div`
	height: 100%;
	width: 100%;
	content: '';

`

const StyledMainContent = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	content: '';
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
type ChatBubbleProps = {
    right?: boolean
}

const StyledChatMessages = styled.div`
	width: 100%;
	height: calc(100% - 50px);
`

const MessageSection = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
	display: flex;
	flex-direction: column;
	padding: 20px;
`
const ChatBubble = styled.p<ChatBubbleProps>`
	background-color: dodgerblue;
	max-width: 300px;
	border-radius: 10px;
	padding: 10px 15px;
	text-align: left;
	align-self: ${props => props.right ? 'flex-end' : 'flex-start'};
	color: white;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};


	&:not(:last-of-type) {
		margin-bottom: 10px;
	}
`
const StyledBottomBar = styled.div`
	height: 50px;
	width: 100%;
	content: '';
	display: flex;
	align-items: center;
	padding: 10px;
`

const StyledInput = styled.input`
	height: 100%;
	border-radius: 25px;
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	width: 100%;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	padding: 0 10px;
	margin-right: 10px;

	&:focus {
		outline: none;
		border: 1px solid ${props => props.theme.ui.colors.border.medium};
	}
`

const SendMessageButton = styled.button`
	min-height: 30px;
	min-width: 30px;
	border: none;
	border-radius: 15px;
	background-color: dodgerblue;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5px 1.5px 0 0;
`

type chatBubble = {
	conect: string
	right: boolean
	key: number
}



const MainPanel = () => {
    const {selectedContact, currentFocusPanel, setCurrentFocusPanel, setNewContact} = useMessengerContext()
	const [chatBubble, setChatBubble] = useState<chatBubble[]>([])
	const [input, setInput] = useState('')
	const workerService = getWorkerService()

    const closeActionHandler = () => {
        const nextFocusPanel = currentFocusPanel === 'left' ? 'main' : 'left';
        setCurrentFocusPanel(nextFocusPanel)
    }

	const sendClick = () => {

		const data: chatBubble = {
			conect: input, right: true, key: new Date().getTime()
		}
		setChatBubble (preChatBubble => [...preChatBubble, data])
		setInput('')
		if ( !workerService.method?.sendMessage || !selectedContact?.keyId) {
			return
		}
		return workerService.method.sendMessage (selectedContact?.keyId, input)
			.then (async n => {
				const [status, check] = n
				
			})
	}

	const BottomBar = () => {

		return (
			<StyledBottomBar>
				<TextField
					label="Please entry message..."
					fullWidth
					required
					autoFocus
					value={input}
					onChange={e=> {
						setInput(e.target.value)
					}}
				/>
				<SendMessageButton onClick={sendClick}>
					<SendIcon size={14} color="white" />
				</SendMessageButton>
			</StyledBottomBar>
		)
	}

	const ChatMessages = () => {

		return (
			<StyledChatMessages>
				<MessageSection>
					{
						chatBubble.map(n => <ChatBubble right={n.right} key={n.key}>{n.conect}</ChatBubble>)
					}

				</MessageSection>
			</StyledChatMessages>
		)
	}

	const message = (data: any) => {
		console.log (data)

		const profile = data.profile
		const contact: Contact = {
			keyId: profile.walletAddr,
			bio: profile.bio,
			alias: '',
			nickname: profile.nickname ? profile.nickname : 'AnonymousUser',
			profileSrc: profile.profileImg
		}
		setNewContact(contact)
		const data1: chatBubble = {
			conect: data.obj.conect, right: false, key: data.obj.timestamp
		}
		setChatBubble (preChatBubble => [...preChatBubble, data1])
	}
	workerService.method.listening = message
	useEffect(() => {
        

    }, [])

    return (
        <StyledMainPanel>
            <HeaderBar
                closeAction={{
                    action: closeActionHandler,
                    icon: currentFocusPanel === 'left' ? <ChevronLeft/> : <ChevronRight/>
                }}
                headerContent={{
                    title: selectedContact && (trimToLength(selectedContact.nickname, 20) || trimToLength(selectedContact.alias, 20) || selectedContact.keyId),
                    subtitle: selectedContact && (selectedContact.nickname || selectedContact.alias) ? selectedContact.keyId : null
                }}
                headerComponents={{
                    headerLeft: selectedContact && <ProfileImage src={selectedContact.profileSrc} size={36}
                    onClick={() => setCurrentFocusPanel('right')}/>
                }}
            />
            <StyledMainContent>
                {
                    selectedContact && (
                        <>
                            <ChatMessages/>
                            <BottomBar/>
                        </>
                    )
                }
            </StyledMainContent>
        </StyledMainPanel>
    )
}

export default MainPanel
