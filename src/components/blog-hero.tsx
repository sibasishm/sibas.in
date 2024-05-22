import React from 'react';

import { dateFormatter } from '@/helpers/formatters';

function BlogHero({
	title,
	publishedOn,
	...delegated
}: {
	title: string;
	publishedOn: string;
}) {
	return (
		<header className='p-6 pb-8 pt-16 md:pt-20 lg:pt-28' {...delegated}>
			<div className='space-y-2 text-center'>
				<dl>
					<dt className='sr-only'>Published on</dt>
					<dd className='text-base md:text-lg leading-6 font-medium text-text-offset'>
						<time dateTime={publishedOn}>
							{dateFormatter(new Date(publishedOn))}
						</time>
					</dd>
				</dl>
				<h1 className='text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14'>
					{title}
				</h1>
			</div>
		</header>
	);
}

export default BlogHero;
