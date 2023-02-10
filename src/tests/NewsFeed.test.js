import React from "react";
import { render } from "@testing-library/react";
import NewsFeed from "../features/newsFeed/NewsFeed";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { UI_STRINGS } from "../common/UI_STRINGS";

const news = [
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

describe("NewsFeed component", () => {
	it("should render correctly with empty news array", () => {
		const { container, getByText } = render(
			<Provider store={store}>
				<NewsFeed news={[]} />
			</Provider>
		);
		expect(container).toMatchSnapshot();
		expect(getByText(UI_STRINGS.NO_VALID_NEWS)).toBeInTheDocument();
	});

	it("should render correctly with news array of length 2", () => {
		const { container, getAllByTestId } = render(
			<Provider store={store}>
				<NewsFeed news={news} />
			</Provider>
		);
		expect(container).toMatchSnapshot();
		expect(getAllByTestId("news-item")).toHaveLength(2);
	});
});
