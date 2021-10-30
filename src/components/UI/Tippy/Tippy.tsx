import ReactTippy, {TippyProps as ReactTippyProps} from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import {JSXElementConstructor, ReactElement, ReactNode} from "react";
import styled from 'styled-components';

type TippyProps = {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined,
    content: ReactNode,
    verticalOffset?: number,
    horizontalOffset?: number
} & ReactTippyProps

const TippyContent = styled.div`
  width: fit-content;
  padding: 5px 10px;
`

const TippyDropdown = (props: TippyProps) => {
    return (
        <ReactTippy
            {...props}
            content={
                <TippyContent>
                    {props.content}
                </TippyContent>
            }
            animation="scale"
            theme="custom"
            arrow={false}
            placement="bottom"
            trigger="click"
            offset={[props.horizontalOffset || 0, props.verticalOffset || 0]}
        >
            {props.children}
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
