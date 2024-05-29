const SkillList = [
	'next.js',
	'tailwind css',
	'figma',
	'javaScript',
	'web design',
	'Gatsby.js',
	'strapi',
	'firebase',
	'generative AI',
	'wireframing',
	'SEO',
	'framer motion',
	'sanity',
];

const Skills = () => {
	return (
		<section className='flex flex-col w-full p-5 border-b-2 border-solid sm:p-12 md:p-16 lg:p-20 border-border text-text'>
			<span className='text-lg font-semibold sm:text-3xl md:text-4xl text-primary'>
				I&apos;m comfortable in...
			</span>
			<ul className='flex flex-wrap justify-center mt-8 sm:justify-start'>
				{SkillList.map((item, index) => {
					return (
						<li
							key={index}
							className='inline-block px-4 py-2 mb-3 mr-3 text-base font-semibold capitalize transition-all duration-200 border-2 border-solid rounded cursor-pointer sm:text-xl md:text-2xl sm:py-4 lg:py-5 sm:px-8 lg:px-12 border-text-offset sm:mr-4 sm:mb-4 md:mr-6 md:mb-6 hover:scale-105 ease'
						>
							{item}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Skills;
