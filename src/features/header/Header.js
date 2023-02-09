import { memo } from "react";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import { HeaderContainer, Title } from "./style";

const Header = () => {
	return (
		<HeaderContainer>
			<Title>{UI_STRINGS.GENERAL.TITLE}</Title>
		</HeaderContainer>
	);
};

export default memo(Header);
