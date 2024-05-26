import Link from 'next/link';

import Hero from '@/components/hero';
import Section from '@/components/section';
import BlogCard from '@/components/blog-card';
import { getBlogPostList } from '@/helpers/file-helpers';

async function Home() {
	const blogPosts = await getBlogPostList();

	return (
		<main>
			<Hero />
			<Section
				title={
					<>
						What&apos;s new?{`\n`} My{' '}
						<span className='text-primary'>blog and news.</span>
					</>
				}
				subtitle='Writings'
			>
				<ol className='divide-y divide-border'>
					{blogPosts.map(({ slug, ...delegated }) => (
						<li key={slug} className='py-12 md:px-6 xl:px-10'>
							<BlogCard link={slug} {...delegated} />
						</li>
					))}
				</ol>
				{/* <Link
					href='/blog'
					className='mt-6 lg:float-right px-8 py-3 rounded-md shadow text-base font-medium tracking-wide capitalize text-background bg-primary hover:bg-primary-offset focus:outline-none focus:shadow-outline transition delay-150 ease-in-out md:py-4 md:text-lg md:px-10'
				>
					Read all &rarr;
				</Link> */}
			</Section>
		</main>
	);
}

export default Home;
