import { memo, useEffect, useState } from "react";
import Clock from "../../../assets/clock.svg";
import HeartFilled from "../../../assets/heart-filled.svg";
import HeartUnfilled from "../../../assets/heart-unfilled.svg";
import {
	LSisInFavorites,
	LSRemoveFavorite,
	LSAddFavorite,
} from "../../../service/localStorageService";
import formatNewsHour from "../../../utils/formatNewsHour";
import {
	StyledFavoriteButtonContainer,
	StyledNewsItemContainer,
	StyledNewsItemData,
	StyledNewsTimestamp,
	StyledNewsTitle,
} from "./style";

const NewsFeedItem = ({ newsHit }) => {
	const [update, setUpdate] = useState(false);

	const openNewsLink = () => {
		window.open(newsHit.story_url, "_blank");
	};

	const isInFavorites = () => {
		return LSisInFavorites(newsHit);
	};

	const removeFavorite = () => {
		LSRemoveFavorite(newsHit);
		setUpdate(!update);
	};

	const onFavorite = () => {
		LSAddFavorite(newsHit);
		setUpdate(!update);
	};

	return (
		<StyledNewsItemContainer>
			<div className="news-row">
				<StyledNewsItemData onClick={openNewsLink}>
					<table>
						<tbody>
							<tr>
								<td>
									<img src={Clock} alt="" />
								</td>
								<td className="news-timestamp">
									<StyledNewsTimestamp>
										{formatNewsHour(newsHit.created_at_i)}
									</StyledNewsTimestamp>
								</td>
							</tr>
						</tbody>
					</table>
					<StyledNewsTitle> {newsHit.story_title}</StyledNewsTitle>
				</StyledNewsItemData>
				<StyledFavoriteButtonContainer>
					{isInFavorites() ? (
						<img
							className="favorite-button"
							src={HeartFilled}
							alt=""
							onClick={removeFavorite}
						/>
					) : (
						<img
							className="favorite-button"
							src={HeartUnfilled}
							alt=""
							onClick={onFavorite}
						/>
					)}
				</StyledFavoriteButtonContainer>
			</div>
		</StyledNewsItemContainer>
	);
};

export default memo(NewsFeedItem);
