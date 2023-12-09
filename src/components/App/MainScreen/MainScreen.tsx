import { LayoutGroup, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion'
import styled from 'styled-components'
import useAppState from "../../../store/appState/useAppState"

//import {DragOverlay} from "../../UI/Common/Overlay/Overlay"
import PlatformModal from "../PlatformModal/PlatformModal"

import CONETProxy from '../Apps/CONET-Proxy/index'
import {getWorkerService} from '../../../services/workerService/workerService'
import {ClientProfiles} from '../../../store/appState/appStateReducer'

import Miner from '../Apps/miner'

import DashBoard from '../Apps/dashboard'
const StyledMainScreen = styled(motion.div)`
	width: 100%;
    overflow-y: auto;
`
const MainScreen = () => {

    const {
        windowInnerSize: {width},
        setClientProfiles,
		showAppStore,
		setIsModalOpen,
        showMiner
    } = useAppState()

    const drawerWidth = width * 0.80

    const drawerDragControls = useDragControls()
    const animationControls = useAnimation()

    const currentDrawerX = useMotionValue(0)
    const drawerXMovements = [-drawerWidth, 1]
    const overlayOpacity = [0, 1]
    const opacity = useTransform(currentDrawerX, drawerXMovements, overlayOpacity)

    const setInitialProfiles = () => {
        const { data } = getWorkerService()
        if ( data.profiles?.length ) {
            const profile = data.profiles
            const clientProfiles = profile.reduce((clientProfiles: ClientProfiles, profile: any) => {
                if (profile.keyID) {
                    // @ts-ignore
                    clientProfiles[profile.keyID] = profile
                }
                return clientProfiles
            }, {})
            setClientProfiles(clientProfiles)
        }
    }

    // useEffect(() => {
    //     setInitialProfiles()
    // }, [])

    const startDrag = (event: any) => {
        drawerDragControls.start(event)
    }

    const dragOptions = (): any => {
        // if (isTouchDevice) {
        return {
            drag: 'x',
            dragControls: drawerDragControls
        }
        // }
        // return {}
    }

    return (
        <>
            {
               
				<PlatformModal/>
				
            }
            {/* <Drawer
                {...dragOptions()}
                style={{x: currentDrawerX}}
                CoNETanimationControls={animationControls}
            /> */}
            {/* {<DragOverlay
                acceptPointerEvents={isDrawerOpen}
                style={{opacity}}
            />} */}
            <StyledMainScreen onTouchStart={startDrag} onPointerDown={startDrag}>
                {/* <Toaster/>
                <GlobalBar/> */}

                <LayoutGroup id="a">
                    <DashBoard />
					{/* { showAppStore && <CONETProxy/>}
                    { showMiner && <Miner />} */}
                    {/* <StyledContents>
                        {!showGuide && !showAppStore && <Messenger/>}
                    </StyledContents> */}
                </LayoutGroup>
            </StyledMainScreen>
        </>
    )
}

export default MainScreen
