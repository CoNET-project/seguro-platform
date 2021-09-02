export const pageTransitionVariants = {
    enter: (direction: number) => {
        return {
            x: direction === 1 ? 500 : -500,
            opacity: 0.5
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction === -1 ? 500 : -500,
            opacity: 0.5,
        };
    }
}