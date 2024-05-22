import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			spacing: {
				'2/3': '67%',
				'72': '18rem',
				'84': '26rem',
				'96': '30rem',
			},
			lineHeight: {
				'14': '3.5rem',
			},
			maxWidth: {
				'screen-2xl': '88rem',
			},
			typography: (theme: PluginAPI['theme']) => ({
				DEFAULT: {
					css: {
						color: theme('colors.text-offset'),
						'h1, h2, h3, blockquote, code, thead': {
							color: theme('colors.text'),
						},
						'strong, a': {
							color: theme('colors.primary-offset'),
						},
					},
				},
			}),
		},
		fontFamily: {
			sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
		},
		colors: {
			background: 'var(--color-background)',
			'background-offset': 'var(--color-background-offset)',
			text: 'var(--color-text)',
			'text-offset': 'var(--color-text-offset)',
			border: 'var(--color-border)',
			primary: 'var(--color-primary)',
			'primary-offset': 'var(--color-primary-offset)',
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
export default config;
