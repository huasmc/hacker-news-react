import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "../../common/styled";
import TabButton from "../../common/tabButton/TabButton";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import NewsFeed from "../newsFeed/NewsFeed";
import { fetchNews, selectNews } from "./DashboardSlice";
import { DashboardContainer } from "./style";

const Dashboard = () => {
	const [activeTab, setActiveTab] = useState(UI_STRINGS.TAB_BUTTON.ALL);
	const news = useSelector(selectNews);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNews({ query: "angular", page: 0, hitsPerPage: 8 }));
	}, [dispatch]);

	return (
		<DashboardContainer>
			<Row>
				<Col span={12}>
					<div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
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
			<NewsFeed news={news} />
		</DashboardContainer>
	);
};

export default memo(Dashboard);
