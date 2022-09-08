import useStore from '../../hooks/useStore';
import StyledHeader from '../Header/styled';
import ProgressHistoryCard from '../ProgressHistory/index';

import {StyledCardlistProgress} from './styled';

export default function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<StyledHeader>
				<h1>Workout Progress</h1>
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
