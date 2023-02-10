import { memo } from "react";
import styled from "styled-components";

const StyledTab = styled.div`
	overflow: hidden,
	border: 1px solid #ccc,
	background-color: #f1f1f1,
`;

const StyledTabButton = styled.button`
	background-color: inherit;
	float: left;
	outline: none;
	cursor: pointer;
	transition: 0.3s;
	height: 1.938rem;
	padding: 0.188rem 2.5rem 0 2.5rem;
	border-radius: 2px;
	border: solid 1px ${(props) => (props.active ? "#1797ff" : "#d6d6d6")};
	font-family: Roboto;
	font-size: 1rem;
	font-stretch: normal;
	font-style: normal;
	letter-spacing: normal;
	font-weight: 500;
	color: ${(props) => (props.active ? "#1797ff" : "#606060")};
`;

const TabButton = ({ options, active, setActive }) => {
	return (
		<StyledTab>
			{Array.isArray(options) &&
				options.map((option) => {
					return (
						<StyledTabButton
							key={option}
							active={option === active}
							onClick={() => setActive(option)}
						>
							{option}
						</StyledTabButton>
					);
				})}
		</StyledTab>
	);
};

export default memo(TabButton);
