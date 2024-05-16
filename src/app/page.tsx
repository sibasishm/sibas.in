import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex gap-4 flex-col items-center justify-between p-24'>
			<h1 className='text-6xl font-extrabold'>Sibasish Mohanty</h1>
			<p className='text-2xl text-base-content'>
				I am a software engineer and a web developer. I have a passion for
				building user-friendly and accessible web applications. I am also
				interested in learning new technologies and exploring new career
				opportunities.
			</p>
			<p className='text-2xl text-accent-content'>
				I am currently working as a Software Engineer at{' '}
				<a href='https://www.google.com'>Google</a>.
			</p>
		</main>
	);
}
