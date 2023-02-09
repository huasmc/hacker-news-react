import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../features/dashboard/DashboardSlice";

export const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
});
