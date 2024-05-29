import LottieAnimation from '@/components/lottie-animation';
import Skills from '@/components/skills';
import Link from 'next/link';

export const metadata = {
	title: 'About Me',
	description: `Here are some details about my self.`,
};

export default function About() {
	return (
		<>
			<section className='w-full md:h-[75vh] border-b-2 border-solid border-border flex flex-col md:flex-row items-center justify-center text-text'>
				<div className='flex justify-center w-full h-full md:h-[70%] border-r-2 border-solid md:w-1/2 border-border'>
					<LottieAnimation src='/lotties/about-me.lottie' />
				</div>
				<div className='flex flex-col items-start justify-center w-full px-5 pb-10 text-left md:w-1/2 sm:p-10 lg:px-16'>
					<h2 className='text-4xl font-bold text-center capitalize sm:text-5xl sxl:text-6xl lg:text-left text-primary'>
						Dream Big, Work Hard, Achieve More!
					</h2>
					<p className='mt-4 text-base font-medium capitalize'>
						This Mantra Drives My Work As A Passionate Freelancer. I Blend
						Innovative Technology With Timeless Design For Captivating Digital
						Experiences. Inspired By Nature And Literature, I&apos;m A Perpetual
						Learner Embracing Challenges. With Each Project, I Aim To Leave A
						Lasting Impact—One Pixel At A Time.
					</p>
				</div>
			</section>
			<Skills />
			<h2 className='self-start mx-5 mt-12 text-lg font-semibold md:text-2xl sm:mx-12 md:mx-16 lg:mx-20 text-text'>
				Have a project in mind? Reach out to me 📞 from{' '}
				<Link href='/contact' className='!underline underline-offset-2'>
					here
				</Link>{' '}
				and let&apos;s make it happen.
			</h2>
		</>
	);
}
