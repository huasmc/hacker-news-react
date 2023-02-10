import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewsFeedItem from "./NewsFeedItem";
import formatNewsHour from "../../../utils/formatNewsHour";

const mockNewsHit = {
	created_at_i: 1595559344,
	story_title: "Test Story",
	story_url: "https://test.com",
};

describe("NewsFeedItem", () => {
	it("renders the news item", () => {
		const { getByText } = render(<NewsFeedItem newsHit={mockNewsHit} />);

		expect(getByText("Test Story")).toBeInTheDocument();
		expect(
			getByText(formatNewsHour(mockNewsHit.created_at_i))
		).toBeInTheDocument(); // Assumes the formatNewsHour function is working correctly
	});

	it("opens the news link on click", () => {
		jest.spyOn(window, "open").mockImplementation(() => {});

		const { getByText } = render(<NewsFeedItem newsHit={mockNewsHit} />);
		const link = getByText("Test Story");

		fireEvent.click(link);

		expect(window.open).toHaveBeenCalledWith("https://test.com", "_blank");
	});

	it("toggles the favorite button", () => {
		const { getByTestId } = render(<NewsFeedItem newsHit={mockNewsHit} />);
		const heartUnfilled = getByTestId("heart-unfilled");

		fireEvent.click(heartUnfilled);

		expect(getByTestId("heart-filled")).toBeInTheDocument();

		fireEvent.click(heartUnfilled);

		expect(getByTestId("heart-unfilled")).toBeInTheDocument();
	});
});
