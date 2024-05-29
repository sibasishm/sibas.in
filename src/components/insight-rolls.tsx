const InsightRoll = ({ insights }: { insights: string[] }) => {
	return (
		<div className='w-full overflow-hidden bg-primary text-border whitespace-nowrap'>
			<div className='flex items-center justify-center w-full py-2 text-sm font-semibold tracking-wider capitalize divide-x animate-roll sm:py-3 sm:text-base'>
				{insights.map((text, index) => (
					<div key={index} className='px-4'>
						{text}
					</div>
				))}
			</div>
		</div>
	);
};

export default InsightRoll;
