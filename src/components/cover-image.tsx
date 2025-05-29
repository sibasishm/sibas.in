import Image from 'next/image';

type CoverImageProps = {
	src?: string;
	alt?: string;
	attribution?: {
		author: string;
		authorUrl: string;
		platform: string;
		platformUrl: string;
	};
};

const CoverImage = ({ src, alt, attribution }: CoverImageProps) => {
	if (!src) {
		return null;
	}

	return (
		<div className='relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] mb-8 md:mb-12 overflow-hidden rounded-lg'>
			<Image
				src={src}
				alt={alt || 'Cover image'}
				fill
				className='object-cover'
				sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				quality={90}
				priority={false}
			/>
			{attribution && (
				<div className='absolute bottom-2 right-2 text-xs text-white/80 bg-black/50 px-2 py-1 rounded backdrop-blur-sm'>
					Photo by{' '}
					<a
						href={attribution.authorUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='underline hover:text-white transition-colors'
					>
						{attribution.author}
					</a>{' '}
					on{' '}
					<a
						href={attribution.platformUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='underline hover:text-white transition-colors'
					>
						{attribution.platform}
					</a>
				</div>
			)}
		</div>
	);
};

export default CoverImage;
