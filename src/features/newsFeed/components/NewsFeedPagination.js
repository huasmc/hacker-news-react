import { StyledPaginationButton, StyledPaginationButtonActive } from "./style";
import { memo } from "react";
import { useSelector } from "react-redux";
import { selectPages } from "../../dashboard/DashboardSlice";

const NewsFeedPagination = ({ page, selectPage }) => {
	const numberOfPages = useSelector(selectPages);

	const previousPage = () => {
		if (page > 0) selectPage(page - 1);
	};

	const nextPage = () => {
		if (page < numberOfPages) selectPage(page + 1);
	};

	return (
		<>
			<StyledPaginationButton onClick={previousPage}>
				<span style={{ fontWeight: "700", cursor: "pointer" }}>{"<"}</span>
			</StyledPaginationButton>
			{Array.from(Array(numberOfPages).keys())
				.slice(page, page + 9)
				.map((pageNumber) => {
					return (
						<div key={pageNumber}>
							{page !== pageNumber ? (
								<StyledPaginationButton onClick={() => selectPage(pageNumber)}>
									{pageNumber + 1}
								</StyledPaginationButton>
							) : (
								<StyledPaginationButtonActive
									onClick={() => selectPage(pageNumber)}
								>
									{pageNumber + 1}
								</StyledPaginationButtonActive>
							)}
						</div>
					);
				})}
			<StyledPaginationButton onClick={nextPage}>
				<span style={{ fontWeight: "700", cursor: "pointer" }}>{">"}</span>
			</StyledPaginationButton>
		</>
	);
};

export default memo(NewsFeedPagination);
