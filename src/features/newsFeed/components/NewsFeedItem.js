import { memo } from "react";
import Clock from "../../../assets/clock.svg";
import HeartFilled from "../../../assets/heart-filled.svg";
import formatNewsHour from "../../../utils/formatNewsHour";
import {
	StyledFavoriteButtonContainer,
	StyledNewsItemContainer,
	StyledNewsItemData,
	StyledNewsTimestamp,
	StyledNewsTitle,
} from "./style";

const NewsFeedItem = ({ newsHit }) => {
	return (
		<StyledNewsItemContainer>
			<div style={{ display: "grid", gridTemplateColumns: "3.5fr 0.5fr" }}>
				<StyledNewsItemData>
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
					<img className="favorite-button" src={HeartFilled} alt="" />
				</StyledFavoriteButtonContainer>
			</div>
		</StyledNewsItemContainer>
	);
};

export default memo(NewsFeedItem);
