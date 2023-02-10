import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "../../common/styled";
import TabButton from "../../common/tabButton/TabButton";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import NewsFeed from "../newsFeed/NewsFeed";
import { fetchNews, selectNews } from "./DashboardSlice";
import { DashboardContainer, TabButtonContainerStyles } from "./style";

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState(UI_STRINGS.TAB_BUTTON.ALL);
	const [page, setPage] = useState(0);
	const news = useSelector(selectNews);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews({ query: "angular", page, hitsPerPage: 8 }));
	}, [page, dispatch]);

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
			<NewsFeed news={news} page={page} setPage={setPage} />
		</DashboardContainer>
	);
};

export default memo(Dashboard);
