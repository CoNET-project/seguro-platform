import {ReactNode, useEffect} from 'react';
import styled from 'styled-components';
import {StyledFormattedParagraph} from "../Text/Text";
import useAppState from "../../../../store/appState/useAppState";

export type ModalActions = {
    confirm: {
        text?: ReactNode | string,
        action: () => void
    },
    cancel?: {
        text?: ReactNode | string,
        action: () => void
    }
}

export type ModalProps = {
    message: ReactNode | string,
    icon?: ReactNode,
    modalActions: ModalActions
}

const StyledModal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.ui.backgroundColor};
  align-items: center;
  margin: auto;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  min-width: 200px;
  max-width: 300px;
  max-height: 200px;
  overflow: hidden;
  z-index: 400;
`

const StyledModalContents = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
  padding: 20px;
`

const StyledModalIcon = styled.div`
  font-size: 36px;
  margin-bottom: 10px;
`

const StyledModalButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`

const StyledModalButton = styled.button`
  width: 100%;
  padding: 12.5px 0;
  border: none;
  color: ${props => props.theme.ui.accentColor};
  background-color: ${props => props.theme.ui.backgroundColor};

  &:active {
    background-color: ${props => props.theme.ui.backgroundAccent};
  }
`

const Modal = ({icon, message, modalActions}: ModalProps) => {
    const appState = useAppState()

    useEffect(() => {
        appState.setIsShowOverlay(true)
        return () => {
            appState.setIsShowOverlay(false)
        }
    }, [])
    return (
        <StyledModal>
            <StyledModalContents>
                <StyledModalIcon>
                    {icon && icon}
                </StyledModalIcon>
                <StyledFormattedParagraph>
                    {message}
                </StyledFormattedParagraph>
            </StyledModalContents>
            <StyledModalButtons>
                {
                    modalActions.cancel && (
                        <StyledModalButton
                            onClick={modalActions.cancel.action}>{modalActions.cancel.text || 'Cancel'}
                        </StyledModalButton>
                    )
                }
                <StyledModalButton
                    onClick={modalActions.confirm.action}>{modalActions.confirm.text || 'OK'}
                </StyledModalButton>
            </StyledModalButtons>
        </StyledModal>
    )
}

export default Modal;