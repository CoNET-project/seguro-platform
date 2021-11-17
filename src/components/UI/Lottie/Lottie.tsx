import Lottie, {LottieComponentProps} from "lottie-react";

type LottieAnimationProps = {
    animationSrc: object,
    loop?: boolean
}

const LottieAnimation = ({animationSrc, loop}: LottieAnimationProps) => {
    const defaultOptions: LottieComponentProps = {
        loop: loop || false,
        autoplay: true,
        animationData: animationSrc,
    }
    return (
        <Lottie
            {...defaultOptions}
        />
    )
}

export default LottieAnimation
