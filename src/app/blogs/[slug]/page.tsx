import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import { BLOG_TITLE } from '@/constants/meta';
import { loadBlogPost } from '@/helpers/file-helpers';
import { COMPONENT_MAP } from '@/helpers/mdx-components';

import BlogHero from '@/components/blog-hero';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { frontmatter } = await loadBlogPost(params.slug);

	return {
		title: `${frontmatter.title} • ${BLOG_TITLE}`,
		description: frontmatter.abstract,
	};
}

async function BlogPost({ params }: { params: { slug: string } }) {
	const { frontmatter, content } = await loadBlogPost(params.slug);

	return (
		<article className='divide-y divide-border'>
			<BlogHero
				title={frontmatter.title}
				publishedOn={frontmatter.publishedOn}
			/>
			<section className='container'>
				<div className='prose lg:prose-lg xl:prose-xl mx-auto py-12'>
					<MDXRemote source={content} components={COMPONENT_MAP} />
				</div>
			</section>
		</article>
	);
}

export default BlogPost;
