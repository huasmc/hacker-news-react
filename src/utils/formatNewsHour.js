const formatNewsHour = (timestamp) => {
	const date = new Date(timestamp * 1000);
	const hours = Math.round((Date.now() - date) / (1000 * 60 * 60));
	const ago = hours > 1 ? `${hours} hours ago` : `${hours} hour ago`;
	const formattedDate = `${ago} by author`;
	return formattedDate;
};

export default formatNewsHour;
