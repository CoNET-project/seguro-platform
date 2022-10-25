import {AnimatePresence, motion} from 'framer-motion'
import styled from 'styled-components'
import React, {ReactNode, useEffect, useState} from "react"
import {pageTransitionVariants} from "../Motion/Variants/Variants"
import ProgressDots from "../Progress/ProgressDots/ProgressDots"

type CarouselProps = {
    current: number,
    carouselVisualItems: Array<(() => ReactNode) | ReactNode>,
    carouselExtraItems?: Array<ReactNode>,
    hasTouch: boolean
}

const StyledCarousel = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const StyledCarouselItem = styled(motion.div)`
	flex: 0.8;
	width: 100%;
	min-height: 100px;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 50px;
`

const StyledCarouselExtraItem = styled(motion.div)`
	content: '';
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 10px;
`
const Carousel = ({hasTouch, carouselVisualItems, carouselExtraItems}: CarouselProps) => {

    const [carouselIndex, setCarouselIndex] = useState(0)
    const [carouselDirection, setCarouselDirection] = useState<-1 | 1>(1)

	

    useEffect(() => {
        if (!hasTouch) {
            const interval = setInterval(() => {
                nextItem()
            }, 4000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [carouselIndex])


    const getItem = (index: number) => {
        if (typeof carouselVisualItems[index] === 'function') {
            // @ts-ignore
            return carouselVisualItems[index]()
        }
        return carouselVisualItems[index]
    }

    const nextItem = () => {
        if (carouselIndex == carouselVisualItems.length - 1) {
            setCarouselIndex(0)
        } else {
            setCarouselIndex(carouselIndex + 1)
        }
        setCarouselDirection(1)
    }

    const previousItem = () => {
        if (carouselIndex == 0) {
            setCarouselIndex(carouselVisualItems.length - 1)
        } else {
            setCarouselIndex(carouselIndex - 1)
        }
        setCarouselDirection(-1)
    }

    const dragProps = (): any => {

        const swipeConfidenceThreshold = 5000;
        const swipePower = (offset: number, velocity: number) => {
            return Math.abs(offset) * velocity;
        };

        if (hasTouch) {
            return {
                drag: "x",
                dragConstraints: {left: 0, right: 0},
                dragElastic: 1,
                onDragEnd: (e: any, {offset, velocity}: any) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                        nextItem()
                    } else if (swipe > swipeConfidenceThreshold) {
                        previousItem()
                    }
                }
            }
        } else {
            return {}
        }
    }

    return (
        <StyledCarousel>
            <AnimatePresence custom={carouselDirection} initial={false} >
                <StyledCarouselItem
                    key={carouselIndex}
                    custom={carouselDirection}
                    variants={pageTransitionVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: {type: "just"},
                        opacity: {duration: 0.2}
                    }}
                    {...dragProps()}
                >
                    {getItem(carouselIndex)}
                </StyledCarouselItem>
            </AnimatePresence>
            <ProgressDots numberOfDots={carouselVisualItems.length} current={carouselIndex + 1}/>
            <AnimatePresence>
                <StyledCarouselExtraItem
                    key={carouselIndex}
                    custom={carouselDirection}
                >
                    {
                        carouselExtraItems && carouselExtraItems[carouselIndex] && (
                            carouselExtraItems[carouselIndex]
                        )
                    }
                </StyledCarouselExtraItem>
            </AnimatePresence>
        </StyledCarousel>
    )
}

export default Carousel
