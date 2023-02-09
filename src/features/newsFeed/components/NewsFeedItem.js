import { memo } from "react";
import Clock from "../../../assets/clock.svg";
import {
	StyledNewsItemContainer,
	StyledNewsTimestamp,
	StyledNewsTitle,
} from "./style";

const NewsFeedItem = ({ newsHit }) => {
	return (
		<StyledNewsItemContainer>
			<table>
				<tbody>
					<tr>
						<td>
							<img src={Clock} alt="" />
						</td>
						<td className="news-timestamp">
							<StyledNewsTimestamp>{newsHit.created_at_i}</StyledNewsTimestamp>
						</td>
					</tr>
				</tbody>
			</table>
			<StyledNewsTitle> {newsHit.story_title}</StyledNewsTitle>
		</StyledNewsItemContainer>
	);
};

export default memo(NewsFeedItem);
