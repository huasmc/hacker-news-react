import { memo } from "react";
import { Col, Row } from "../../common/styled";
import NewsFeedItem from "./components/NewsFeedItem";
import NewsFeedPagination from "./components/NewsFeedPagination";
import { StyledPaginationContainer } from "./components/style";

const NewsFeed = ({ news, page, setPage }) => {
	const selectPage = (page) => setPage(page);

	return (
		<div>
			<Row span={12}>
				<Col span={6}>
					{Array.isArray(news) &&
						news.slice(0, 4).map((newsHit) => {
							return <NewsFeedItem key={newsHit.objectID} newsHit={newsHit} />;
						})}
				</Col>
				<Col span={6}>
					{Array.isArray(news) &&
						news.slice(4, 8).map((newsHit) => {
							return <NewsFeedItem key={newsHit.objectID} newsHit={newsHit} />;
						})}
				</Col>
			</Row>
			<StyledPaginationContainer>
				<NewsFeedPagination page={page} selectPage={selectPage} />
			</StyledPaginationContainer>
		</div>
	);
};

export default memo(NewsFeed);
