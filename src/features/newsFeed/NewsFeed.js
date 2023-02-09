import { memo } from "react";
import { Col, Row } from "../../common/styled";

const NewsFeed = () => {
	return (
		<Row>
			<Col span={6}>1</Col>
			<Col span={6}>2</Col>
		</Row>
	);
};

export default memo(NewsFeed);
