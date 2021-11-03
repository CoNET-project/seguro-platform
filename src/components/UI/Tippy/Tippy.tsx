import ReactTippy, {TippyProps as ReactTippyProps} from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import {JSXElementConstructor, ReactElement, ReactNode, useEffect, useState} from "react";
import styled from 'styled-components';
import useAppState from "../../../store/appState/useAppState";

type TippyProps = {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined,
    content: ReactNode,
    visible?: boolean,
    verticalOffset?: number,
    horizontalOffset?: number,
} & ReactTippyProps

const TippyContent = styled.div``

const TippyDropdown = ({children, content, onClickOutside, visible, verticalOffset, horizontalOffset}: TippyProps) => {

    const {isModalOpen} = useAppState()

    return (
        <ReactTippy
            content={
                <TippyContent>
                    {content}
                </TippyContent>
            }
            visible={visible}
            onClickOutside={onClickOutside || undefined}
            interactive={true}
            animation="scale"
            theme="custom"
            arrow={false}
            placement="bottom-end"
            zIndex={200}
            offset={[horizontalOffset || 0, verticalOffset || 0]}
        >
            {children}
        </ReactTippy>
    )
}

const Tippy = ({children, content}: TippyProps) => {
    return (
        <ReactTippy placement="bottom">
            {children}
        </ReactTippy>
    )
}

export {
    TippyDropdown
}
