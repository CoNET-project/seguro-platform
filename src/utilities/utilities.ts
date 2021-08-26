interface WindowInnerSize {
    width: number,
    height: number
}


export const detectTouchDevice = (): boolean => {
    if (typeof window !== undefined) {
        if ('ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            // @ts-ignore
            navigator.msMaxTouchPoints ||
            window.matchMedia("(pointer: coarse)").matches
        ) {
            return true
        }
    }
    return false
}

export const detectWindowInnerSize = (): WindowInnerSize | null => {
    if (typeof window !== undefined) {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    return null
}
