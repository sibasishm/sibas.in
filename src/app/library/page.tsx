import BlogCard from '@/components/blog-card';
import { POSTS } from '@/constants/library';
import { dateFormatter } from '@/helpers/formatters';

async function Blogs() {
	return (
		<main className='container'>
			<section className='space-y-2 md:space-y-5 p-6 pb-8 pt-16 md:pt-20 lg:pt-28'>
				<h1 className='font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Library
				</h1>
				<p className='text-base md:text-lg leading-7 text-text-offset'>
					The internet is a treasure trove of fascinating content on just about
					everything. Here are some of my favorite reads—articles, books, and
					more—on software engineering, design, music, literature, and beyond.
					Dive in and explore what is been sparking my curiosity!
				</p>
			</section>
			<ol className='divide-y divide-border my-6'>
				{POSTS.filter(post => post.isPublished && post.link)
					.sort((a, b) =>
						new Date(b.dateAdded) > new Date(a.dateAdded) ? 1 : -1
					)
					.map(({ title, description, link, dateAdded }, idx) => (
						<li key={idx} className='p-6'>
							<article>
								<h2 className='text-2xl leading-8 font-bold tracking-tight'>
									{title}
								</h2>
								<div className='text-text-offset mt-1 text-base'>
									{description}
								</div>
								<div className='inline-flex flex-col items-start md:items-center md:flex-row space-y-1 md:space-x-4 md:space-y-0 mt-2'>
									<dl>
										<dt className='sr-only'>Added on</dt>
										<dd className='text-sm leading-6 text-text-offset'>
											{dateFormatter(new Date(dateAdded))}
										</dd>
									</dl>
									<a
										href={link}
										target='_blank'
										rel='noopener noreferrer'
										className='text-sm leading-6 text-text-offset'
									>
										{link} &#8599;
									</a>
								</div>
							</article>
						</li>
					))}
			</ol>
		</main>
	);
}

export default Blogs;
