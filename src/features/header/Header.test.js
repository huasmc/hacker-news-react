import React from "react";
import { screen, render } from "@testing-library/react";
import Header from "./Header";

describe("App", () => {
	test("it renders", () => {
		render(<Header />);
		expect(screen.getByText("HACKER NEWS")).toBeInTheDocument();
	});
});
