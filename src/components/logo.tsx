import Image from 'next/image';
import Link from 'next/link';
import { BLOG_TITLE } from '@/constants/meta-data';

const Logo = () => {
	return (
		<Link href='/' className='flex items-center text-dark dark:text-light'>
			<div className='w-12 mr-2 overflow-hidden border border-solid rounded-full md:w-16 border-dark dark:border-gray md:mr-4'>
				<Image
					src='/profile-img.png'
					alt='Sibasish logo'
					className='w-full h-auto rounded-full'
					sizes='20vw'
					width={200}
					height={200}
					priority
				/>
			</div>
			<h3 className='text-lg font-bold dark:font-semibold md:text-xl'>
				{BLOG_TITLE}
			</h3>
		</Link>
	);
};

export default Logo;
