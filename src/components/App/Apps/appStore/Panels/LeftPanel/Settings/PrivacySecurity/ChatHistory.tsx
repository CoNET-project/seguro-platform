import styled from "styled-components"
import Header from "../../Header"
import React, {useEffect, useState} from "react"


type RadioValues = "never" | "24hours" | "3days" | "1month"
const StyledContainer = styled.div`
	height: 100%;
	width: 100%;
`

const StyledContent = styled.div`
	height: calc(100% - 50px);
	width: 100%
`

const StyledSection = styled.div`
	width: 100%;
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	padding: 0 25px;
`

const StyledDescription = styled.p``

const StyledRadioSelection = styled.div`
	margin: 10px 0;
	display: flex;
	align-items: center;
	padding: 0 20px;
`

const StyledRadioLabel = styled.label`
	margin-left: 10px;
`

const StyledRadio = styled.input``

const ChatHistory = () => {

    const [selectedRadio, setSelectedRadio] = useState<RadioValues>("never")

    useEffect(() => {
        console.log(selectedRadio)
    }, [selectedRadio])



    return (
        <StyledContainer>
            <Header/>
            <StyledContent>
                <StyledSection>
                    <StyledDescription>
                        How long would you like Seguro to save your chat history for on your
                        device?
                    </StyledDescription>
                </StyledSection>
                <StyledSection>
                    <StyledRadioSelection>
                        <StyledRadio type="radio" value="never"
                                     checked={selectedRadio == "never"} onChange={() => setSelectedRadio("never")}/>
                        <StyledRadioLabel htmlFor="never">Never</StyledRadioLabel>
                    </StyledRadioSelection>

                    <StyledRadioSelection>
                        <StyledRadio type="radio" value="24hours"
                                     checked={selectedRadio == "24hours"} onChange={() => setSelectedRadio("24hours")}/>
                        <StyledRadioLabel htmlFor="24-hours">24 Hours</StyledRadioLabel>
                    </StyledRadioSelection>

                    <StyledRadioSelection>
                        <StyledRadio type="radio" value="3days"
                                     checked={selectedRadio == "3days"} onChange={() => setSelectedRadio("3days")}/>
                        <StyledRadioLabel htmlFor="3-days">3 Days</StyledRadioLabel>
                    </StyledRadioSelection>

                    <StyledRadioSelection>
                        <StyledRadio type="radio" value="1month"
                                     checked={selectedRadio == "1month"} onChange={() => setSelectedRadio("1month")}/>
                        <StyledRadioLabel htmlFor="1-month">1 Month</StyledRadioLabel>
                    </StyledRadioSelection>
                </StyledSection>
            </StyledContent>
        </StyledContainer>
    )
}
export default ChatHistory