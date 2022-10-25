import styled from "styled-components"
import Header from "../Header";
import {useMessengerContext} from "../../../../../../../contexts/messenger/MessengerContext"
import {exampleChats} from "../../../ExampleData";
import ListItem from "../../../../../../UI/Messenger/Contact/ListItem"
import {pageNavigator} from "../../../../../../../contexts/pageNavigator/pageNavigatorActions"
import {usePageNavigator} from "../../../../../../../contexts/pageNavigator/PageNavigatorContext"
import React from 'react'

const StyledChats = styled.div`
	height: 100%;
	width: 100%;
`

const StyledChatsContent = styled.div`
	height: calc(100% - 50px);
	width: 100%;
	overflow: auto;
`


const Chats = () => {
    const {currentChat, contacts, setCurrentChat, setSelectedContact} = useMessengerContext()
    const {dispatch} = usePageNavigator()

    const getContact = () => {

    }


    return (
        <StyledChats>
            <Header onClick={() => dispatch(pageNavigator.navigateToPage('Chats/Add Chat'))}/>
            <StyledChatsContent>
                {Object.values(exampleChats).map((chat, index) => (
                    contacts[chat.contactId] && (
                        <ListItem contact={contacts[chat.contactId]}
                                  key={`chat-${chat.chatId}-${index}`}
                                  subtext={chat.messageHistory[chat.messageHistory.length - 1]?.data || undefined}
                                  onClick={() => {
                                      setCurrentChat(chat)
                                      setSelectedContact(contacts[chat.contactId])
                                  }}
                        />
                    )
                ))}
            </StyledChatsContent>
        </StyledChats>
    )
}

export default Chats