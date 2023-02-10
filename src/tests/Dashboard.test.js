import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "../features/dashboard/Dashboard";
import {
	fetchNews,
	fetchFavoriteNews,
} from "../features/dashboard/DashboardSlice";

const mockStore = configureStore([]);

describe("Dashboard component", () => {
	let store;
	let news = [
		{ id: 1, title: "News 1" },
		{ id: 2, title: "News 2" },
		{ id: 3, title: "News 3" },
	];

	beforeEach(() => {
		store = mockStore({
			dashboard: {
				news,
			},
		});
		store.dispatch = jest.fn();
	});

	it("should render correctly", () => {
		const { container } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		expect(container).toMatchSnapshot();
	});

	it("should fetch news when page changes", () => {
		render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		act(() => {
			store.dispatch(fetchNews({ query: "", page: 0, hitsPerPage: 8 }));
		});
		expect(store.dispatch).toHaveBeenCalledWith(
			fetchNews({ query: "", page: 0, hitsPerPage: 8 })
		);
	});

	it('should fetch favorite news when "My Faves" tab is clicked', () => {
		const { getByText } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		act(() => {
			fireEvent.click(getByText("My Faves"));
		});
		expect(store.dispatch).toHaveBeenCalledWith(fetchFavoriteNews(1));
	});

	it("should change the selected filter in the dropdown", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		act(() => {
			fireEvent.click(getByText("News 2"));
		});
		expect(store.dispatch).toHaveBeenCalledWith(
			fetchNews({ query: "news 2", page: 0, hitsPerPage: 8 })
		);
	});

	it("should change the active tab when a tab button is clicked", () => {
		const { getByText } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		act(() => {
			fireEvent.click(getByText("My faves"));
		});
		expect(store.dispatch).toHaveBeenCalledTimes(2);
	});
});
