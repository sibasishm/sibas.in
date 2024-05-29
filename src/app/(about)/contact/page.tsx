import ContactForm from '@/components/contact-form';
import LottieAnimation from '@/components/lottie-animation';
import { EMAIL } from '@/constants/meta';

export const metadata = {
	title: 'Contact Me',
	description: `Contact me through the form available on this page or email me at ${EMAIL}`,
};

export default function Contact() {
	return (
		<section className='w-full h-auto md:h-[75vh] border-b-2 border-solid border-border flex  flex-col md:flex-row items-center justify-center text-text'>
			<div className='inline-block w-full h-full md:h-[80%] border-solid sm:w-4/5 md:w-2/5 md:border-r-2 border-border'>
				<LottieAnimation src='/lotties/contact-me.lottie' />
			</div>
			<div className='flex flex-col items-start justify-center w-full px-5 pb-8 md:w-3/5 xs:px-10 md:px-16'>
				<h2 className='text-2xl font-bold capitalize xs:text-3xl sm:text-4xl'>
					Let&apos;s Connect!
				</h2>
				<ContactForm />
			</div>
		</section>
	);
}
