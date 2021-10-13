import styled, {keyframes} from "styled-components";
import {screenWidth} from "../../screenSizes";
import HeaderBar from "../HeaderBar/HeaderBar";
import ListItem from "../ListItem/ListItem";
import {ReactNode} from "react";
import {ChevronLeft} from "../../Icons/Icons";

export type SubModal = {
    title: ReactNode,
    closeAction: () => void
}

export type ModalProps = {
    title: ReactNode,
    children: ReactNode,
    closeAction: () => void,
    subModal?: SubModal
}

const ModalKeyFrames = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const StyledModal = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 40rem;
  opacity: 0;
  background-color: ${props => props.theme.ui.backgroundColor};
  z-index: 200;
  animation: ${ModalKeyFrames} 500ms forwards;
  border: 1px solid rgba(200, 200, 200, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;

  @media (${screenWidth.narrowWidth}) {
    //border: 1px solid rgba(0, 0, 0, 0.15);
    max-height: 60rem;
  }
`

const Modal = ({title, children, closeAction, subModal}: ModalProps) => {
    return (
        <StyledModal>
            {children}
        </StyledModal>
    )
}

export default Modal