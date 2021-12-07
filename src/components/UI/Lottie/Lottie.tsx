import Lottie from "react-lottie-player";

type LottieAnimationProps = {
    animationSrc: object,
    loop?: boolean
}

const LottieAnimation = ({animationSrc, loop}: LottieAnimationProps) => {
    const defaultOptions = {
        loop: loop || false,
        play: true,
        animationData: animationSrc
    }
    return (
        <Lottie
            {...defaultOptions}
        />
    )
}

export default LottieAnimation
