import styled from "styled-components";

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-gap: 1rem;
`;

export const Col = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0.5rem;
	padding-right: 0.5rem;
	grid-column: span ${(props) => props.span};
`;
