'use client';
import React from 'react';
import { Rss, Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';

import { COLOR_THEME_COOKIE_NAME } from '@/constants/meta-data';

import Logo from '@/components/logo';

type HeaderProps = {
	initialTheme?: string;
	className?: string;
};

function Header({ initialTheme, className, ...delegated }: HeaderProps) {
	const [theme, setTheme] = React.useState(initialTheme);

	function handleToggleTheme() {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);

		Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
			expires: 1000,
		});
	}

	return (
		<header
			className='relative flex items-center justify-between h-48 w-100 max-w-7xl py-4 mx-auto'
			{...delegated}
		>
			<Logo />

			<div className='flex gap-4 items-center'>
				<button className='btn btn-ghost'>
					<Rss
						size='1.5rem'
						style={{
							// Optical alignment
							transform: 'translate(2px, -2px)',
						}}
					/>
					<span className='invisible'>View RSS feed</span>
				</button>
				<button className='btn btn-ghost' onClick={handleToggleTheme}>
					{theme === 'light' ? <Sun size='1.5rem' /> : <Moon size='1.5rem' />}
					<span className='invisible'>Toggle theme</span>
				</button>
			</div>
		</header>
	);
}

export default Header;
