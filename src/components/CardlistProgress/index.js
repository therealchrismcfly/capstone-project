import useStore from '../../hooks/useStore';
import ProgressHistoryCard from '../ProgressHistory/index';
import {StyledCardlistProgress} from '../StyledCardlist/styled';
import StyledHeader from '../StyledHeader/styled';
import StyledHeadline from '../StyledHeadline/styled';

function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<StyledHeader>
				<StyledHeadline>Workout Progress</StyledHeadline>
			</StyledHeader>
			<StyledCardlistProgress>
				{exerciseCards.map(exerciseCard => {
					return (
						<ProgressHistoryCard key={exerciseCard.id} exerciseCard={exerciseCard} />
					);
				})}
			</StyledCardlistProgress>
		</>
	);
}

export default CardlistProgress;
