import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
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
		<html lang='en'>
			<body className={sansFont.variable}>{children}</body>
		</html>
	);
}
