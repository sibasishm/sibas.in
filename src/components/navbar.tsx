'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Cookie from 'js-cookie';

import { LINKS } from '@/constants/links';

import { Logo } from '@/components/logo';
import SVGProvider from '@/components/svg-provider';
import { COLOR_THEME_COOKIE_NAME } from '@/constants/theme';

type NavbarProps = {
	initialTheme: string;
};

export const Navbar = ({ initialTheme }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isTop, setIsTop] = useState(true);

	const [theme, setTheme] = useState(initialTheme);

	function handleToggleTheme() {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);

		Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
			expires: 1000,
		});
	}

	useEffect(() => {
		const scrollHandler = () => {
			setIsTop(window.scrollY < window.innerHeight);
		};

		window.addEventListener('scroll', scrollHandler);

		return () => window.removeEventListener('scroll', scrollHandler);
	}, [isTop]);

	return (
		<header
			className={`fixed w-full z-10 bg-background transition duration-150 ease-in-out ${
				!isTop && 'bg-background-offset blur shadow-lg'
			}`}
		>
			<div className='container'>
				<div className='relative flex justify-between items-center h-16 md:h-20'>
					<div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
						<button
							className='inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
							aria-label='Main menu'
							aria-expanded='false'
							type='button'
							onClick={() => setIsMenuOpen(prev => !prev)}
						>
							<SVGProvider name={isMenuOpen ? 'menu-open' : 'menu-closed'} />
						</button>
					</div>
					<div className='flex-1 flex items-center justify-center md:justify-start'>
						<div className='flex-shrink-0'>
							<Link
								href='/'
								aria-label='Sibasish Mohanty'
								className='inline-flex items-center p-2 space-x-2 rounded-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
							>
								<Logo className='h-8 w-8' theme={theme} />
								<span className='hidden sm:block text-lg font-semibold'>
									Sibasish Mohanty
								</span>
							</Link>
						</div>
						<nav className='hidden md:flex md:ml-4'>
							{LINKS.map(({ name, href }) => (
								<Link
									key={name}
									href={href}
									className='ml-4 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out'
								>
									{name}
								</Link>
							))}
						</nav>
					</div>
					<button
						className='inline-flex items-center p-2 rounded-md hover:shadow-md focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'
						onClick={handleToggleTheme}
						type='button'
						aria-label='Theme Toggle'
					>
						<SVGProvider name={theme === 'theme-light' ? 'sun' : 'moon'} />
						<span className='hidden lg:inline ml-2'>{`${
							theme === 'theme-light' ? 'Light' : 'Dark'
						} Mode`}</span>
					</button>
				</div>
				<nav
					className={`p-2 pb-3 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
				>
					{LINKS.map(({ name, href }) => (
						<Link
							key={name}
							href={href}
							className='block mt-1 px-3 py-2 rounded-md font-medium leading-5 text-text-offset hover:text-text hover:bg-background focus:outline-none focus:text-text focus:bg-background transition duration-150 ease-in-out'
						>
							{name}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};
