export const dateFormatter = (date: Date) => {
	return date.toLocaleDateString('en-IN', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
	});
};

export const timeFormatter = (date: Date) =>
	date.toLocaleTimeString('en-IN', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});

export const dateTimeFormatter = (date: Date) =>
	date.toLocaleString('en-IN', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
	});
