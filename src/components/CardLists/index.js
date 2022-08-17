import {exercises} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledCard from '../Card/styled';
import StyledHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

function CardlistIndex() {
	const addCard = useStore(state => state.addCard);

	return (
		<>
			<p>Alle Übungen</p>
			<StyledCardlist>
				{exercises.map(exercise => {
					return (
						<StyledCard key={exercise._id}>
							<StyledHeadline>{exercise.name}</StyledHeadline>
							<StyledCalendarButton
								onClick={() => {
									addCard(exercise.name);
								}}
							>
								{'add to planner'}
							</StyledCalendarButton>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
