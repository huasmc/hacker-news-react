import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ENDPOINTS } from "../../service/endpoints";
import { get } from "../../service/rest";

export const fetchNews = createAsyncThunk("news", async (queryParams) => {
	try {
		const response = await get(ENDPOINTS.NEWS + "?", queryParams);
		return response;
	} catch (error) {
		throw new Error(error);
	}
});

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
			console.log(hits);
			state.news = hits.filter(
				(hit) => hit.author && hit.story_title && hit.story_url && hit.created_at
			);
		});
	},
});

export const selectNews = (state) => state.dashboard.news;
export const selectPages = (state) => state.dashboard.pages;
export default dashboardSlice.reducer;
