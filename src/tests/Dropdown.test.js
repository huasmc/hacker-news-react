import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../common/dropdown/Dropdown";

describe("Dropdown", () => {
	it("renders with a placeholder", () => {
		const placeholder = "Select an option";
		const { getByText } = render(
			<Dropdown
				selected={null}
				setSelected={() => {}}
				placeholder={placeholder}
				options={[]}
			/>
		);
		expect(getByText(placeholder)).toBeInTheDocument();
	});

	it("renders with a selected option", () => {
		const selected = { title: "Option 1", icon: "" };
		const { getByText } = render(
			<Dropdown
				selected={selected}
				setSelected={() => {}}
				placeholder=""
				options={[]}
			/>
		);
		expect(getByText(selected.title)).toBeInTheDocument();
	});

	it("opens and closes the dropdown menu when the toggle button is clicked", () => {
		const selected = { title: "Option 1", icon: "" };
		const { getByTestId, queryByText, getByText } = render(
			<Dropdown
				selected={selected}
				setSelected={() => {}}
				placeholder=""
				options={[{ title: "Option 2", icon: "", testId: "option-2" }]}
			/>
		);
		const toggleButton = getByTestId("stack-dropdown");

		fireEvent.click(toggleButton);
		expect(getByText("Option 2")).toBeInTheDocument();

		fireEvent.click(toggleButton);
		expect(queryByText("Option 2")).not.toBeInTheDocument();
	});

	test("selects an option from the dropdown menu", async () => {
		const options = [
			{
				title: "Option 1",
				icon: "option-1-icon",
				testId: "option-1",
			},
			{
				title: "Option 2",
				icon: "option-2-icon",
				testId: "option-2",
			},
		];
		const placeholder = "Select an option";

		const DropdownWrapper = () => {
			const [selected, setSelected] = React.useState(null);

			return (
				<Dropdown
					selected={selected}
					setSelected={setSelected}
					placeholder={placeholder}
					options={options}
				/>
			);
		};
		const { getByTestId, queryByText } = render(<DropdownWrapper />);

		fireEvent.click(getByTestId("stack-dropdown"));

		const option1 = getByTestId("option-1");
		fireEvent.click(option1);

		expect(queryByText("Option 1")).toBeTruthy();
	});
});
