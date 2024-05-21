import { ICONS } from '@/constants/icons';

const SVGProvider = ({ name }: { name: string }) => (
	<svg
		className='fill-current h-5 w-5'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		viewBox='0 0 24 24'
		stroke='currentColor'
	>
		{ICONS[name]}
	</svg>
);

export default SVGProvider;
