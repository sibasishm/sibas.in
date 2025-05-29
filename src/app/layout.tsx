import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

import './globals.css';

const sansFont = Work_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
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
		<html
			lang='en'
			className={`${sansFont.variable} font-sans`}
			suppressHydrationWarning
		>
			<body className='relative antialiased text-text bg-background min-h-screen'>
				<ThemeProvider>
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
