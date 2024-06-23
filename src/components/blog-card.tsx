import Link from 'next/link';

import { dateFormatter } from '@/helpers/formatters';

type BlogCardProps = {
	link: string;
	publishedOn: string;
	title: string;
	description?: string;
};

const BlogCard = ({ link, publishedOn, title, description }: BlogCardProps) => {
	return (
		<article className='space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0'>
			<dl>
				<dt className='sr-only'>Published on</dt>
				<dd className='text-base leading-6 font-medium text-text-offset'>
					{dateFormatter(new Date(publishedOn))}
				</dd>
			</dl>
			<div className='xl:col-span-3'>
				<h2 className='text-2xl leading-8 font-bold tracking-tight'>
					<Link
						href='/blogs/[link]'
						as={`/blogs/${link}`}
						className='text-text hover:text-primary'
					>
						{title}
					</Link>
				</h2>
				<div className='text-text-offset mt-1 max-w-none'>{description}</div>
				<div className='text-base leading-6 font-medium mt-4'>
					<Link
						href='/blogs/[link]'
						as={`/blogs/${link}`}
						className='text-primary hover:underline'
						aria-label={`Read ${title}`}
					>
						Read more &rarr;
					</Link>
				</div>
			</div>
		</article>
	);
};

export default BlogCard;
