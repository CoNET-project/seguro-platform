import {useEffect, useRef} from 'react';
import {validate as uuidValidate, version as uuidVersion} from 'uuid';
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

export const getBase64FromFile = (file: File, base64: (error: ProgressEvent<FileReader> | null, b64: string | ArrayBuffer | null) => void) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        base64(null, reader.result)
    };
    reader.onerror = function (error) {
        base64(error, null)
    };
}

export const getAnonymousProfileImage = () => {
    return 'data:image/png;base64,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'
}

export const trimToLength = (value: string | undefined, length: number) => {
    if (!value) {
        return ''
    }

    const addEllipsis = value.length > length

    return value.split("").slice(0, length).join("") + (addEllipsis ? "..." : "")
}