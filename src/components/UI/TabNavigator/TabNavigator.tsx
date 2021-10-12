import styled from 'styled-components'
import {AnimatePresence, HTMLMotionProps, motion} from "framer-motion";
import TabNavigatorTabs from "./TabNavigatorTabs/TabNavigatorTabs";
import {PageNavigatorProvider} from "../../Providers/PageNavigatorProvider";
import {ReactNode} from "react";
import {usePageNavigator} from "../../../contexts/pageNavigator/PageNavigatorContext";
import {TabActiveStyles} from "./Tab/Tab";
import {pageTransitionVariants} from "../Motion/Variants/Variants";

export type TabNavigatorPages = {
    [id: string]: {
        text?: ReactNode | string,
        icon?: ReactNode,
        screen: ReactNode
    }
}

type TabNavigatorProps = {
    screens: TabNavigatorPages,
    activeStyles?: TabActiveStyles
}

const StyledTabNavigator = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const StyledTabNavigatorContent = styled(motion.div)`
  height: 100%;
`

const TabNavigatorContent = ({screens}: TabNavigatorProps) => {
    const {state} = usePageNavigator()

    const content = screens[state.current[0]].screen

    return (
        <AnimatePresence custom={state.current[1]} exitBeforeEnter>
            <StyledTabNavigatorContent
                key={state.current[0]}
                custom={state.current[1]}
                variants={pageTransitionVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                    x: {type: "just", duration: 0.2},
                    opacity: {type: false}
                }}
            >
                {content}
            </StyledTabNavigatorContent>
        </AnimatePresence>
    )
}

const TabNavigator = ({screens, activeStyles}: TabNavigatorProps) => {

    return (
        <PageNavigatorProvider existingPages={Object.keys(screens)}>
            <StyledTabNavigator>
                <TabNavigatorContent screens={screens}/>
                <TabNavigatorTabs screens={screens} activeStyles={activeStyles}/>
            </StyledTabNavigator>
        </PageNavigatorProvider>
    )
}

export default TabNavigator