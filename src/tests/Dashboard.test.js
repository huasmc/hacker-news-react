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
		{
			objectID: "1",
			author: "John Doe",
			story_title: "Some news title",
			story_url: "https://some-news-title.com",
			created_at: "2022-01-01T00:00:00.000Z",
		},
		{
			objectID: "2",
			author: "Jane Doe",
			story_title: "Another news title",
			story_url: "https://another-news-title.com",
			created_at: "2022-02-01T00:00:00.000Z",
		},
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
		expect(store.dispatch).toHaveBeenCalledTimes(2);
	});

	it('should fetch favorite news when "My Faves" tab is clicked', () => {
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

	it("should change the selected filter in the dropdown", () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		const stackDropdown = getByTestId("stack-dropdown");
		act(() => {
			fireEvent.click(stackDropdown);
		});

		expect(store.dispatch).toHaveBeenCalledTimes(1);
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
