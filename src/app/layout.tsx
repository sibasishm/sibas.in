import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { cookies } from 'next/headers';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { COLOR_THEME_COOKIE_NAME } from '@/constants/theme';

import './globals.css';

const sansFont = Work_Sans({
	subsets: ['latin'],
	display: 'fallback',
	variable: '--font-sans',
	weight: 'variable',
});

export const metadata: Metadata = {
	title: 'Sibasish Mohanty',
	description: 'Blog | Portfolio | Work Enquiry',
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
		<html lang='en' className={sansFont.variable} data-theme='light'>
			<body
				className={`${theme} relative antialiased font-sans text-text bg-background min-h-screen overflow-hidden`}
			>
				<Navbar initialTheme={theme} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
