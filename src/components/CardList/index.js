import {exercises} from '../../../backend/db';
import StyledCalenderButton from '../Buttons/CalenderButton/styled';
import StyledCard from '../Card/styled';
import StyledHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

export default function Cardlist() {
	return (
		<StyledCardlist>
			{exercises.map(exercise => {
				return (
					<StyledCard key={exercise.id}>
						<StyledHeadline>{exercise.name}</StyledHeadline>
						<StyledCalenderButton>Calender</StyledCalenderButton>
					</StyledCard>
				);
			})}
		</StyledCardlist>
	);
}
