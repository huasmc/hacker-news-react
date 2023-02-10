import { memo } from "react";
import { Col, Row } from "../../common/styled";
import { UI_STRINGS } from "../../common/UI_STRINGS";
import NewsFeedItem from "./components/NewsFeedItem";
import NewsFeedPagination from "./components/NewsFeedPagination";
import {
	StyledNewsFeedContainerLeft,
	StyledNewsFeedContainerRight,
	StyledPaginationContainer,
} from "./components/style";

const NewsFeed = ({ news, page, setPage }) => {
	const selectPage = (page) => setPage(page);

	return (
		<div>
			<Row span={12} style={{ minHeight: "570px" }}>
				{Array.isArray(news) && news.length === 0 && (
					<Row>
						<h2>{UI_STRINGS.NO_VALID_NEWS}</h2>
					</Row>
				)}
				<StyledNewsFeedContainerLeft>
					<Col span={6}>
						{Array.isArray(news) &&
							news.slice(0, 4).map((newsHit) => {
								return (
									<NewsFeedItem key={newsHit.objectID} newsHit={newsHit} />
								);
							})}
					</Col>
				</StyledNewsFeedContainerLeft>
				<StyledNewsFeedContainerRight>
					<Col span={6}>
						{Array.isArray(news) &&
							news.slice(4, 8).map((newsHit) => {
								return (
									<NewsFeedItem key={newsHit.objectID} newsHit={newsHit} />
								);
							})}
					</Col>
				</StyledNewsFeedContainerRight>
			</Row>
			<StyledPaginationContainer>
				<NewsFeedPagination page={page} selectPage={selectPage} />
			</StyledPaginationContainer>
		</div>
	);
};

export default memo(NewsFeed);
