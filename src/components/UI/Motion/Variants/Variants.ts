export const pageTransitionVariants = {
    enter: (direction: number) => {
        return {
            zIndex: 0,
            x: direction === 1 ? 1000 : -1000,
            opacity: 0
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
            x: direction === -1 ? 1000 : -1000,
            opacity: 0
        };
    }
}