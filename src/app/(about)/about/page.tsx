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
						Hey there!
					</h2>
					<p className='mt-4 text-base md:text-lg font-medium'>
						I&apos;m Sibasish Mohanty, a front-end developer and designer based
						in the bustling city of Mumbai, India. I currently work at
						Freecharge (AXIS DBAT Team), where I specialize in creating
						beautiful, user-friendly digital banking experiences. I also enjoy
						sharing my knowledge through blogging and speaking at tech events.
					</p>
					<p className='mt-4 text-base md:text-lg font-medium'>
						When I&apos;m not immersed in code, I enjoy unwinding with a good
						book or a thought-provoking movie. I have a diverse range of
						hobbies, including cooking, currating music, following current
						affairs, and nurturing my cat, Moon. Recently, I&apos;ve been hooked
						on this fantastic{' '}
						<a
							href='https://music.youtube.com/playlist?list=PLmGyxv5oUCDZjYJzyYF8j0uoMjZttrCJ9&si=BUgkFBpp-kmgWpj6'
							className='link !inline-block !text-primary-offset'
							target='_blank'
							rel='noopener noreferrer'
						>
							playlist
						</a>{' '}
						on Carnatic music.
					</p>
				</div>
			</section>
			{/* <Skills /> */}
			<h2 className='self-start mx-5 mt-12 font-semibold md:text-lg sm:mx-12 md:mx-16 lg:mx-20 text-text'>
				I&apos;m always open to new opportunities and love connecting with
				like-minded individuals.{' '}
				<Link
					href='/contact'
					className='link !inline-block !text-primary-offset'
				>
					Feel free to reach out
				</Link>{' '}
				for any collaborations, questions, or just to say hi!
			</h2>
		</>
	);
}
