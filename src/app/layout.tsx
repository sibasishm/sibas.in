import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

import { BLOG_DESCRIPTION, BLOG_TITLE } from '@/constants/meta-data';

import './styles.css';
import Header from '@/components/header';
import {
	COLOR_THEME_COOKIE_NAME,
	DARK_TOKENS,
	LIGHT_TOKENS,
} from '@/constants/theme';

const sansFont = Work_Sans({
	subsets: ['latin'],
	display: 'fallback',
	variable: '--font-sans',
	weight: 'variable',
});

export const metadata: Metadata = {
	title: BLOG_TITLE,
	description: BLOG_DESCRIPTION,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
	const theme = savedTheme?.value || 'light';

	console.log(theme);
	return (
		<html
			lang='en'
			className={sansFont.variable}
			data-color-theme={theme}
			style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
		>
			<body className='antialiased font-sans'>
				<Header initialTheme={theme} />
				{children}
			</body>
		</html>
	);
}
