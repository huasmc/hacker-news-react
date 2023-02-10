export const LSisInFavorites = (newsHit) => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
	return favorites.find(
		(favoritePost) => favoritePost.story_title === newsHit.story_title
	);
};

export const LSAddFavorite = (newsHit) => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
	const findNews = favorites.find(
		(newsPost) => newsPost.story_title === newsHit.story_title
	);
	if (!findNews) {
		favorites.push(newsHit);
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}
};

export const LSRemoveFavorite = (newsHit) => {
	const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
	const findNews = favorites.find(
		(newsPost) => newsPost.story_title === newsHit.story_title
	);
	if (findNews) {
		const newFavorites = favorites.filter(
			(favorite) => favorite.story_title !== newsHit.story_title
		);
		localStorage.setItem("favorites", JSON.stringify(newFavorites));
	}
};
