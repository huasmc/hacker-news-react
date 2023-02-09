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
	initialState: { news: [] },
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchNews.fulfilled, (state, action) => {
			const {
				payload: { hits },
			} = action;
			console.log(hits);
			state.news = hits;
		});
	},
});

export const selectNews = (state) => state.dashboard.news;
export default dashboardSlice.reducer;
