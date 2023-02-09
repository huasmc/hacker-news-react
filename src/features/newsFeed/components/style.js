import styled from "styled-components";

export const StyledNewsTimestamp = styled.span`
	font-family: Roboto;
	font-size: 0.688rem;
	font-weight: normal;
	font-stretch: normal;
	font-style: normal;
	line-height: normal;
	letter-spacing: normal;
	color: #767676;
	width: 90%;
	display: inline-block;
	padding: 3px 0 0px 5px;
`;

export const StyledNewsTitle = styled.span`
	font-family: Roboto;
	font-size: 0.875rem;
	font-weight: 500;
	font-stretch: normal;
	font-style: normal;
	line-height: 1.43;
	letter-spacing: 0.25px;
	color: #6b6b6b;
	width: 100%;
	display: inline-block;
`;

export const StyledNewsItemContainer = styled.div`
	width: 90%;
	height: 53px;
	margin: 0 0 1.875rem 0;
	padding: 1.625rem;
	opacity: 0.8;
	border-radius: 6px;
	border: solid 1px #979797;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 67vw;
		height: 13vw;
	}
`;
