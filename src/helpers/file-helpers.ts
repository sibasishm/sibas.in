import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

type BlogPost = {
	slug: string;
	publishedOn: string;
	updatedOn: string;
	isPublished: boolean;
	tags: string[];
	title: string;
	description: string;
	image: string;
	imageAttribution?: {
		author: string;
		authorUrl: string;
		platform: string;
		platformUrl: string;
	};
	content: string;
};

export async function getBlogPostList() {
	const fileNames = await readDirectory('/content');

	const blogPosts: BlogPost[] = [];

	for (let fileName of fileNames) {
		const rawContent = await readFile(`/content/${fileName}`);

		const { data: frontmatter }: { data: any } = matter(rawContent);

		blogPosts.push({
			slug: fileName.replace('.mdx', ''),
			...frontmatter,
		});
	}

	return blogPosts
		.filter(p => p.isPublished)
		.sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export const loadBlogPost = React.cache(async function loadBlogPost(
	slug: string
) {
	const rawContent = await readFile(`/content/${slug}.mdx`);

	const { data: frontmatter, content } = matter(rawContent);

	return { frontmatter, content };
});

function readFile(localPath: string) {
	return fs.readFile(path.join(process.cwd(), localPath), 'utf8');
}

function readDirectory(localPath: string) {
	return fs.readdir(path.join(process.cwd(), localPath));
}
