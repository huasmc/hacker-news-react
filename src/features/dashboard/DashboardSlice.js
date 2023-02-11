import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../service/endpoints";
import { LSGetFavorites } from "../../service/localStorageService";
import { get } from "../../service/rest";

export const fetchNews = createAsyncThunk("news", async (queryParams) => {
	try {
		const response = await get(ENDPOINTS.NEWS + "?", queryParams);
		return response;
	} catch (error) {
		throw new Error(error);
	}
});

export const fetchFavoriteNews = createAsyncThunk(
	"faves-news",
	async (page) => {
		try {
			const response = LSGetFavorites();
			const startIndex = (page - 1) * 8;
			const endIndex = startIndex + 8;
			const items = response ? response.slice(startIndex, endIndex) : [];
			const nbPages = response ? Math.ceil(response.length / 8) : 0;
			return { hits: items, nbPages };
		} catch (error) {
			throw new Error(error);
		}
	}
);

const dashboardSlice = createSlice({
	name: "dashboard",
	initialState: { news: [], pages: 0 },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchNews.fulfilled, (state, action) => {
			const {
				payload: { hits, nbPages },
			} = action;
			state.pages = nbPages;
			state.news = hits.filter(
				(hit) =>
					hit.author && hit.story_title && hit.story_url && hit.created_at
			);
		});
		builder.addCase(fetchFavoriteNews.fulfilled, (state, action) => {
			const {
				payload: { hits, nbPages },
			} = action;
			state.pages = nbPages;
			state.news = hits.filter(
				(hit) =>
					hit.author && hit.story_title && hit.story_url && hit.created_at
			);
		});
	},
});

export const selectNews = (state) => state.dashboard.news;
export const selectPages = (state) => state.dashboard.pages;
export default dashboardSlice.reducer;
