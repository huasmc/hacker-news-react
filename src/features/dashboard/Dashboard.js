import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StackDropdownConfig } from "../../common/config/StackDropdownConfig";
import Dropdown from "../../common/dropdown/Dropdown";
import { Col, Row } from "../../common/styled";
import TabButton from "../../common/tabButton/TabButton";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import NewsFeed from "../newsFeed/NewsFeed";
import { fetchNews, selectNews } from "./DashboardSlice";
import { DashboardContainer, TabButtonContainerStyles } from "./style";

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState(UI_STRINGS.TAB_BUTTON.ALL);
	const [selected, setSelected] = useState(StackDropdownConfig[0]);
	const [page, setPage] = useState(0);
	const news = useSelector(selectNews);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			fetchNews({ query: selected.title.toLowerCase(), page, hitsPerPage: 8 })
		);
	}, [page, selected, dispatch]);

	return (
		<DashboardContainer>
			<Row>
				<Col span={12}>
					<div style={TabButtonContainerStyles}>
						<TabButton
							options={[
								UI_STRINGS.TAB_BUTTON.ALL,
								UI_STRINGS.TAB_BUTTON.MY_FAVES,
							]}
							active={activeTab}
							setActive={setActiveTab}
						/>
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div style={{ padding: "0 0 3vw 10vw" }}>
						<Dropdown
							placeholder={UI_STRINGS.DROPDOWN.PLACEHOLDER}
							selected={selected}
							setSelected={setSelected}
							options={StackDropdownConfig}
						/>
					</div>
				</Col>
			</Row>
			<NewsFeed news={news} page={page} setPage={setPage} />
		</DashboardContainer>
	);
};

export default memo(Dashboard);
