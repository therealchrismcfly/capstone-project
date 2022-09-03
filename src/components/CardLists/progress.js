import useStore from '../../hooks/useStore';
import StyledHeadline from '../Headline/styled';
import ProgressHistoryCard from '../ProgressHistory/index';

import StyledCardlist from './styled';

export default function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<StyledHeadline>
				<h1>Workout Progress</h1>
			</StyledHeadline>
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
