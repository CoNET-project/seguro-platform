import styled from "styled-components"



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

const ChatMessages = () => {

    return (
        <StyledChatMessages>
            <MessageSection>
                <ChatBubble>
                    hey
                </ChatBubble>
                <ChatBubble right={true}>
                    How are you?!
                </ChatBubble>
                <ChatBubble>
                    I'm doing fine, how about yourself?
                </ChatBubble>
                <ChatBubble right={true}>
                    Great! Lets meet up soon?
                </ChatBubble>
            </MessageSection>
        </StyledChatMessages>
    )
}

export default ChatMessages