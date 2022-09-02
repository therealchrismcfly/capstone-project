import useStore from '../../hooks/useStore';
import ProgressHistoryCard from '../Cards/progressHistoryCard';

import StyledCardlist from './styled';

export default function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<h1>Progress History</h1>
			<StyledCardlist>
				{exerciseCards.map(exerciseCard => {
					return (
						<ProgressHistoryCard key={exerciseCard.id} exerciseCard={exerciseCard} />
					);
				})}
			</StyledCardlist>
		</>
	);
}
