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

	const start = Math.max(0, Math.min(page - 4, numberOfPages - 9));
	const end = Math.min(numberOfPages, start + 9);

	return (
		<>
			<StyledPaginationButton onClick={previousPage}>
				<span style={{ fontWeight: "700", cursor: "pointer" }}>{"<"}</span>
			</StyledPaginationButton>
			{Array.from(Array(numberOfPages).keys())
				.slice(start, end)
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
				<span
					style={{ fontWeight: "700", cursor: "pointer" }}
					data-testid="next-page"
				>
					{">"}
				</span>
			</StyledPaginationButton>
		</>
	);
};

export default memo(NewsFeedPagination);
