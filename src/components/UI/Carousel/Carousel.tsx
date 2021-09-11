import {AnimatePresence, motion} from 'framer-motion';
import styled from 'styled-components';
import {ReactNode, useEffect, useState} from "react";
import {pageTransitionVariants} from "../Motion/Variants/Variants";
import ProgressDots from "../Progress/ProgressDots/ProgressDots";

type CarouselProps = {
    current: number,
    direction: -1 | 1,
    carouselItems: Array<ReactNode>,
    hasTouch: boolean,
    actionHandlers: {
        next: () => void,
        previous: () => void
    }
}

const StyledCarousel = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledCarouselItem = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Carousel = ({current, direction, hasTouch, carouselItems, actionHandlers}: CarouselProps) => {

    useEffect(() => {
        if (!hasTouch) {
            const interval = setInterval(() => {
                actionHandlers.next()
            }, 5000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [current])


    const contentIndex = current - 1
    const content = carouselItems[current - 1]

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
                        actionHandlers.next()
                    } else if (swipe > swipeConfidenceThreshold) {
                        actionHandlers.previous()
                    }
                }
            }
        } else {
            return {}
        }
    }
    return (
        <StyledCarousel>
            <AnimatePresence custom={direction} initial={false} exitBeforeEnter>
                <StyledCarouselItem
                    key={contentIndex}
                    custom={direction}
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
                    {content}
                </StyledCarouselItem>
            </AnimatePresence>
            <ProgressDots numberOfDots={carouselItems.length} current={current}/>
        </StyledCarousel>
    )
}

export default Carousel