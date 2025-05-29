import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Script from 'next/script';

import { BLOG_TITLE } from '@/constants/meta';
import { loadBlogPost } from '@/helpers/file-helpers';
import { COMPONENT_MAP } from '@/helpers/mdx-components';

import BlogHero from '@/components/blog-hero';
import SocialShare from '@/components/social-share';
import CoverImage from '@/components/cover-image';

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const { frontmatter } = await loadBlogPost(params.slug);
	const title = `${frontmatter.title} • ${BLOG_TITLE}`;
	const description = frontmatter.abstract;
	const image = frontmatter.image;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime: frontmatter.publishedOn,
			modifiedTime: frontmatter.updatedOn,
			authors: ['Sibasish Mohanty'],
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: frontmatter.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [image],
			creator: '@sibasishmohanty',
		},
	};
}

async function BlogPost({ params }: { params: { slug: string } }) {
	const { frontmatter, content } = await loadBlogPost(params.slug);
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: frontmatter.title,
		description: frontmatter.abstract,
		image: frontmatter.image,
		datePublished: frontmatter.publishedOn,
		dateModified: frontmatter.updatedOn,
		author: {
			'@type': 'Person',
			name: 'Sibasish Mohanty',
		},
		publisher: {
			'@type': 'Organization',
			name: BLOG_TITLE,
			logo: {
				'@type': 'ImageObject',
				url: '/images/sibasish-mohanty.jpg',
			},
		},
	};

	const url = `https://sibas.in/blogs/${params.slug}`;

	return (
		<>
			<Script
				id='blog-post-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<article className='divide-y divide-border'>
				<BlogHero
					title={frontmatter.title}
					publishedOn={frontmatter.publishedOn}
				/>
				<section className='container'>
					<CoverImage
						src={frontmatter.image}
						alt={frontmatter.title}
						attribution={frontmatter.imageAttribution}
					/>
					<div className='prose lg:prose-lg xl:prose-xl mx-auto py-12'>
						<MDXRemote source={content} components={COMPONENT_MAP} />
						<SocialShare title={frontmatter.title} url={url} />
					</div>
				</section>
			</article>
		</>
	);
}

export default BlogPost;
