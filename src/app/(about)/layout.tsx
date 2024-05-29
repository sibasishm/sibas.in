import InsightRoll from '@/components/insight-rolls';

const insights = [
	'20+ Projects Completed',
	'3+ Years of Freelancing',
	'99% Client Satisfaction',
	'20K+ Subscribers',
	'Authored In-Depth Course on Educative',
	'Contributed as a Technical Course Reviewer 📝',
	'Recipient of the Hackernoon Noonies Award 🏆',
];

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className='flex flex-col items-center justify-between w-full pb-8 pt-16 md:pt-20 lg:pt-28'>
			<InsightRoll insights={insights} />
			{children}
		</main>
	);
}
