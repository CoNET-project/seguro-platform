import styled from 'styled-components';

type OverlayProps = {
    show: boolean
}

type StyledOverlayProps = {
    show: boolean
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.show ? 100 : -100};
  background-color: rgba(0, 0, 0, 0.65);
  transition: opacity 50ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  width: 100%;
  height: 100%
`

const Overlay = ({show}: OverlayProps) => {
    return <StyledOverlay show={show}/>
}

export default Overlay