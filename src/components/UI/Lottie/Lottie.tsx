import Lottie from "react-lottie-player";

type LottieAnimationProps = {
    animationSrc: object,
    loop?: boolean
}

const LottieAnimation = ({animationSrc, loop}: LottieAnimationProps) => {
    const defaultOptions = {
        loop: loop || false,
        play: true,
        animationData: animationSrc,
        style: {
            height: 50
        }
    }
    return (
        <Lottie
            {...defaultOptions}
            style={{maxHeight: 550, maxWidth: 550}}
        />
    )
}

export default LottieAnimation
