import Image from 'next/image';
import Link from 'next/link';
import { TypewriterEffect } from './typewriter-effect';

const MY_TITLES = [
	{ text: 'Developer,' },
	{ text: 'Designer,' },
	{ text: 'Blogger' },
];

const Hero = () => (
	<div className='relative'>
		<div className='hidden absolute inset-y-0 right-0 lg:block w-1/3 bg-primary'>
			<svg
				className='absolute transform bottom-0 -translate-x-1/2 -translate-y-1/2'
				width='350'
				height='400'
				fill='none'
				viewBox='0 0 350 400'
			>
				<defs>
					<pattern
						id='5d0dd344-b041-4d26-bec4-8d33ea57ec9b'
						x='0'
						y='0'
						width='20'
						height='20'
						patternUnits='userSpaceOnUse'
					>
						<rect
							x='0'
							y='0'
							width='3'
							height='3'
							className='text-text-offset'
							fill='currentColor'
						/>
					</pattern>
				</defs>
				<rect
					width='350'
					height='400'
					fill='url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)'
				/>
			</svg>
		</div>
		<section className='relative container mx-auto pt-20 md:pt-24 lg:pt-40 lg:min-h-screen lg:flex lg:space-x-40'>
			<div className='sm:text-center lg:text-left'>
				<TypewriterEffect
					words={MY_TITLES}
					className='text-base sm:text-xl md:text-2xl lg:text-2xl font-light tracking-widest text-text-offset text-left sm:text-center lg:text-left'
				/>
				<h1 className='mt-2 sm:mt-4 text-3xl tracking-tight leading-10 font-extrabold text-text sm:text-5xl sm:leading-none md:text-6xl whitespace-pre-line'>
					I transform good ideas{`\n`} into{' '}
					<span className='text-primary'>great products.</span>
				</h1>
				<div className='mt-6 lg:hidden'>
					<Image
						className='h-72 w-full object-cover sm:h-96'
						src='/images/sibasish-mohanty.jpg'
						alt='Sibasish Mohanty smiling'
						width={480}
						height={480}
					/>
				</div>
				<p className='mt-6 text-base text-text-offset sm:mt-8 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0'>
					Hey there! I&apos;m Sibasish, a Front-End Developer turning complex
					ideas into seamless user interfaces. When I&apos;m not busy coding up
					a storm, you&apos;ll find me blogging about the latest tech trends or
					geeking out over the newest JavaScript frameworks.
				</p>
				<p className='mt-2 text-base text-text-offset sm:mt-4 sm:text-lg sm:max-w-2xl sm:mx-auto md:text-xl lg:mx-0'>
					Currently shaping digital banking experiences at Freecharge - Axis
					DBAT
				</p>
				<div className='mt-5 sm:mt-12 sm:flex sm:justify-center lg:justify-start'>
					<div>
						<Link
							href='/blogs'
							className='w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10'
						>
							View blogs
						</Link>
					</div>
					<div className='mt-3 sm:mt-0 sm:ml-4'>
						<Link
							href='/about'
							className='w-full flex items-center justify-center px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-primary border border-primary bg-background hover:border-primary-offset hover:text-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10'
						>
							Read about me
						</Link>
					</div>
				</div>
			</div>
			<div className='hidden lg:block'>
				<Image
					className='h-96 w-84 object-cover'
					src='/images/sibasish-mohanty.jpg'
					alt='Sibasish Mohanty smiling'
					width={416}
					height={480}
				/>
			</div>
		</section>
	</div>
);

export default Hero;
