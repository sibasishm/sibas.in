import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

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
	return (
		<html lang='en' className={sansFont.variable} suppressHydrationWarning>
			<body className='relative antialiased font-sans text-text bg-background min-h-screen overflow-hidden'>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
