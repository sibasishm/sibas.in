'use client';

import { useTheme } from 'next-themes';
import { Logo } from './logo';

export const Footer = () => {
	const { theme } = useTheme();
	return (
		<footer className='bg-background-offset px-2 py-12 mt-24 text-center w-full'>
			<div className='container'>
				<div className='inline-flex items-center p-2 space-x-2 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
					<Logo className='h-8 w-8' theme={theme} />
					<span className='text-lg font-semibold'>Sibasish Mohanty</span>
				</div>
				<ul className='flex flex-wrap gap-4 md:gap-6 justify-center items-center text-sm md:text-base font-semibold mt-4'>
					<a
						href='https://github.com/sibasishm'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Github
					</a>
					<a
						href='https://topmate.io/sibasish_mohanty/'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Topmate
					</a>
					<a
						href='https://www.linkedin.com/in/sibasish-mohanty/'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						LinkedIn
					</a>
					<a
						href='https://www.behance.net/Sibasish19'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Behance
					</a>
					<a
						href='https://stackoverflow.com/users/9128145/sibasishm'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Stack Overflow
					</a>
					<a
						href='https://twitter.com/smsibasish'
						className='link'
						target='_blank'
						rel='noopener noreferrer'
					>
						Twitter
					</a>
				</ul>
				<p className='text-sm md:text-base mt-10'>
					&copy; 2020-present. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
