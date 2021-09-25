import {useEffect, useRef} from 'react';
import {version as uuidVersion} from 'uuid';
import {validate as uuidValidate} from 'uuid';
import {Sizes} from "../components/UI/Icons/Icons";

interface WindowInnerSize {
    width: number,
    height: number
}

export const useDidMountEffect = (func: () => void, deps: any) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) {
            func();
        } else {
            didMount.current = true;
        }
    }, deps);
};

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

export const detectWindowInnerSize = (): WindowInnerSize => {
    return {
        width: window.innerWidth || 0,
        height: window.innerHeight || 0
    }
}

export const windowKeyListener = (event: KeyboardEvent, key: string): boolean => {
    return event.key === key
}

export const isUUIDv4 = (str: string | undefined): boolean => {
    if (!str) {
        return false
    }
    return uuidValidate(str) && uuidVersion(str) === 4;
}

export const getPixelSize = (size: Sizes): string => {
    if (!size) {
        return '14px'
    }
    if (typeof size === 'number') {
        return `${size}px`
    }

    switch (size) {
        case 'sm':
            return '24px'
        case 'md':
            return '32px'
        case 'lg':
            return '40px'
        case 'xl':
            return '48px'
        case 'xxl':
            return '56px'
    }
}

export const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

export const CopyToClipboard = (data: string) => {
    if (navigator) {
        navigator.clipboard.writeText(data).then();
    }
}
