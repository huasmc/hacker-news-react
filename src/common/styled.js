import styled from "styled-components";

export const Row = styled.div`
	display: flex;
	grid-gap: 1rem;
	width: 100%;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: row;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	grid-column: span ${(props) => props.span};
	width: 100%;
	box-sizing: border-box;
`;
