import React, {ReactNode} from 'react';
import {Toaster as ToasterRHT, toast as toastRHT} from 'react-hot-toast';
import styled, {useTheme} from 'styled-components';

export const Toaster = () => {
    const theme = useTheme()
    return (
        <ToasterRHT
            position="top-center"
            toastOptions={{
                className: '',
                style: {
                    border: '1px solid rgba(150, 150, 150, 0.3)',
                    backgroundColor: `${theme.ui.backgroundAccentWithOpacity}`,
                    color: `${theme.ui.text.textPrimary}`,
                    marginTop: '5px',
                    boxShadow: '0 5px 5px rgba(0,0,0,0.2)',
                    minWidth: '200px',
                    zIndex: 201
                }
            }}
        />
    );
}

export default Toaster;

interface ToastProps {
    toastId: string,
    toastIcon?: ReactNode,
    event: ReactNode | string
}

const StyledToast = styled.div``

const StyledToastContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const StyledToastIcon = styled.div`
  margin-right: 5px;
`

const StyledToastText = styled.p``


const Toast = ({toastId, toastIcon, event}: ToastProps) => (
    <StyledToast>
        {/* Text */}
        <StyledToastContent>
            {
                toastIcon && (
                    <StyledToastIcon>
                        {toastIcon}
                    </StyledToastIcon>
                )
            }
            <StyledToastText>{event}</StyledToastText>
        </StyledToastContent>
    </StyledToast>
);

interface ToastParams {
    event: ReactNode | string,
    toastIcon?: ReactNode,
    duration?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const durations = {
    xs: 1500,
    sm: 3000,
    md: 6000,
    lg: 12000,
    xl: 24000
};

export const toast = ({toastIcon, event, duration = 'sm'}: ToastParams) => {
    toastRHT.dismiss();
    toastRHT(({id}) => (
        <Toast
            toastId={id}
            event={event}
            toastIcon={toastIcon}
        />
    ), {
        duration: durations[duration]
    })

}
