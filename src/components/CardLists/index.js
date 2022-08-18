import {exercises} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledCard from '../Card/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

function CardlistIndex() {
	const addCard = useStore(state => state.addCard);

	return (
		<>
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{exercises.map(exercise => {
					return (
						<StyledCard key={exercise._id}>
							<StyledCardHeader>
								<StyledHeadline>{exercise.name}</StyledHeadline>
								<StyledCalendarButton
									onClick={() => {
										addCard(exercise.name);
									}}
								>
									{'add to planner'}
								</StyledCalendarButton>
							</StyledCardHeader>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
