import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TabButton from "../common/tabButton/TabButton";

describe("TabButton component", () => {
	it("renders without crashing", () => {
		const options = ["Option 1", "Option 2"];
		const active = "Option 1";
		const setActive = jest.fn();

		const { getByText } = render(
			<TabButton options={options} active={active} setActive={setActive} />
		);

		expect(getByText("Option 1")).toBeTruthy();
		expect(getByText("Option 2")).toBeTruthy();
	});

	it("displays the selected option with the correct styling", () => {
		const options = ["Option 1", "Option 2"];
		const active = "Option 1";
		const setActive = jest.fn();

		const { getByText } = render(
			<TabButton options={options} active={active} setActive={setActive} />
		);

		const selectedOption = getByText("Option 1");
		expect(selectedOption).toHaveStyle(`
      border: solid 1px #1797ff;
      color: #1797ff;
    `);
	});

	it("calls the `setActive` function when an option is clicked", () => {
		const options = ["Option 1", "Option 2"];
		const active = "Option 1";
		const setActive = jest.fn();

		const { getByText } = render(
			<TabButton options={options} active={active} setActive={setActive} />
		);

		const option2 = getByText("Option 2");
		fireEvent.click(option2);
		expect(setActive).toHaveBeenCalledWith("Option 2");
	});
});
