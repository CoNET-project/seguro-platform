import styled from 'styled-components';
import {HTMLMotionProps, motion, useAnimation} from "framer-motion";
import Item from "./Item/Item";
import {
    AiOutlineMessage,
    AiOutlineQuestionCircle,
    FaCcApplePay,
    IoFileTrayStackedOutline,
    MdSystemUpdateAlt
} from "react-icons/all";
import {SettingGear} from "../Icons/Icons";
import React, {ForwardedRef} from 'react';

type DrawerProps = {} & HTMLMotionProps<any>

const StyledDrawer = styled(motion.div)`
  height: 100vh;
  width: 75%;
  background-color: ${props => props.theme.ui.backgroundAccent};
  color: ${props => props.theme.ui.text.textPrimary};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 0;
  transform: translateX(-375px);
  border-right: 1px solid rgba(0, 0, 0, 0.15);
  opacity: 0;
  padding-top: calc(env(safe-area-inset-top));
`

const StyledSection = styled.div`
  &:first-of-type {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }

  &:last-of-type {
    border-top: 1px solid rgba(0, 0, 0, 0.15);
  }
`

const Drawer = React.forwardRef((props: DrawerProps, ref: ForwardedRef<HTMLDivElement>) => {
    {
        return (
            <StyledDrawer {...props} ref={ref}>
                <StyledSection>
                    <Item text='Messenger' icon={<AiOutlineMessage/>}/>
                    <Item text='File Storage' icon={<IoFileTrayStackedOutline/>}/>
                    <Item text='Apple Pay' icon={<FaCcApplePay/>}/>
                </StyledSection>
                <StyledSection>
                    <Item text='Settings' icon={<SettingGear/>}/>
                    <Item text='Updates' icon={<MdSystemUpdateAlt/>}/>
                    <Item text='Support' icon={<AiOutlineQuestionCircle/>}/>
                </StyledSection>
            </StyledDrawer>
        )
    }
})

export default Drawer