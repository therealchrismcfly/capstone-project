import useStore from '../../hooks/useStore';
import StyledHeader from '../Header/styled';
import StyledHeadline from '../Headline/styled';
import ProgressHistoryCard from '../ProgressHistory/index';

import {StyledCardlistProgress} from './styled';

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
