'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

const LottieAnimation = ({ src }: { src: string }) => {
	return <DotLottiePlayer src={src} autoplay loop></DotLottiePlayer>;
};

export default LottieAnimation;
