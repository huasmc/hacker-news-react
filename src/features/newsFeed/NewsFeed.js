import { memo } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "../../common/styled";
import { selectPages } from "../dashboard/DashboardSlice";
import NewsFeedItem from "./components/NewsFeedItem";
import {
	StyledPaginationButton,
	StyledPaginationButtonActive,
} from "./components/style";

const NewsFeed = ({ news, page, setPage }) => {
	const numberOfPages = useSelector(selectPages);

	const selectPage = (page) => setPage(page);

	const previousPage = () => {
		if (page > 0) setPage(page - 1);
	};

	const nextPage = () => {
		if (page < numberOfPages) setPage(page + 1);
	};

	return (
		<div>
			<Row span={12} style={{ padding: "70px" }}>
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
			<Row>
				<StyledPaginationButton onClick={previousPage}>
					<span style={{ fontWeight: "700", cursor: "pointer" }}>{"<"}</span>
				</StyledPaginationButton>
				{Array.from(Array(numberOfPages).keys())
					.slice(page, page + 9)
					.map((pageNumber) => {
						return (
							<>
								{page !== pageNumber ? (
									<StyledPaginationButton
										key={pageNumber}
										onClick={() => selectPage(pageNumber)}
									>
										{pageNumber + 1}
									</StyledPaginationButton>
								) : (
									<StyledPaginationButtonActive
										key={pageNumber}
										onClick={() => selectPage(pageNumber)}
									>
										{pageNumber + 1}
									</StyledPaginationButtonActive>
								)}
							</>
						);
					})}
				<StyledPaginationButton onClick={nextPage}>
					<span style={{ fontWeight: "700", cursor: "pointer" }}>{">"}</span>
				</StyledPaginationButton>
			</Row>
		</div>
	);
};

export default memo(NewsFeed);
