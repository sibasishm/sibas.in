import BlogCard from '@/components/blog-card';
import { getBlogPostList } from '@/helpers/file-helpers';

async function Blogs() {
	const blogPosts = await getBlogPostList();

	return (
		<main className='container'>
			<section className='space-y-2 md:space-y-5 p-6 pb-8 pt-16 md:pt-20 lg:pt-28'>
				<h1 className='font-extrabold tracking-tight text-4xl sm:leading-10 md:text-6xl md:leading-14'>
					Latest articles
				</h1>
				<p className='text-lg leading-7 text-text-offset'>
					All the tip and tricks related to web development and UI design along
					with latest updates and news about me.
				</p>
			</section>
			<ol className='divide-y divide-border'>
				{blogPosts.map(({ slug, ...delegated }) => (
					<li key={slug} className='py-12 md:px-6 xl:px-10'>
						<BlogCard link={slug} {...delegated} />
					</li>
				))}
			</ol>
		</main>
	);
}

export default Blogs;
