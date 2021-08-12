import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getBridgeService } from '../../../services/bridgeService/bridgeService'

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledTitle = styled.div`
    margin-bottom: 20px;
    font-size: 20px;
`

const UnlockScreen = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        const getMessage = async () => {
            setMessage(await getBridgeService()?.getHelloWorld() ?? '')
        }
        getMessage()
    }, [])

    return (
        <StyledContainer>
            <StyledTitle>
                Seguro Platform (unlock screen)
            </StyledTitle>
            <div>
                Message from the bridge:
            </div>
            <div>
                "{message}"
            </div>
        </StyledContainer>
    )
}

export default UnlockScreen
