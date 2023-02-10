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
	width: 100%;
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
	--auto-grid-min-size: 16rem;
	display: inline-grid;
	border: 1px solid #c1c1c1;
	border-radius: 6px;
	margin: 0 0 1.875rem 0;
`;

export const StyledNewsItemData = styled.div`
	padding: 1.625rem 0 1.625rem 1.625rem;
`;

export const StyledFavoriteButtonContainer = styled.div`
	height: 100%;
	background: #f5f5f5;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-right: 1px solid #c1c1c1;
	border-radius: 6px;
`;

export const StyledPaginationButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 2rem;
	height: 2rem;
	padding: 0.25rem;
	border-radius: 6px;
	background-color: #ffffff;
	border: solid 1px #d9d9d9;
	cursor: pointer;

	@media (max-width: 768px) {
		flex-direction: row;
	}
`;

export const StyledPaginationButtonActive = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	width: 2rem;
	height: 2rem;
	padding: 0.25rem;
	border-radius: 6px;
	background-color: #1890ff;
	cursor: pointer;
`;

export const StyledPaginationContainer = styled.div`
	display: flex;
	grid-gap: 0.5rem;
	width: 100%;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	flex-direction: row;
	padding-top: 4rem;

	@media (max-width: 768px) {
		flex-direction: row;
		grid-gap: 0;
	}
`;
