import { memo } from "react";
import { Col, Row } from "../../common/styled";
import NewsFeedItem from "./components/NewsFeedItem";

const NewsFeed = ({ news }) => {
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
		</div>
	);
};

export default memo(NewsFeed);
