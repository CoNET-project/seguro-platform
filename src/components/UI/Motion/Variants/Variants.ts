export const pageFadeTransitionVariants = {
    enter: {
        zIndex: 1,
        opacity: 1
    },
    center: {
        zIndex: 1,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        opacity: 0
    }
}

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

export const progressStepTransitionVariants = {
    enter: {
        zIndex: 0,
        y: -10,
        opacity: 0
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        y: 100,
        opacity: 0
    }
}