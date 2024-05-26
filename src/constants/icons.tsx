export const ICONS: {
	[key: string]: JSX.Element;
} = {
	sun: (
		<path d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' />
	),
	moon: (
		<path d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z' />
	),
	'menu-closed': (
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M4 6h16M4 12h16M4 18h16'
		/>
	),
	'menu-open': (
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M6 18L18 6M6 6l12 12'
		/>
	),
};
