import useStore from '../../hooks/useStore';
import ProgressHistoryCard from '../ProgressHistory/index';
import StyledSearchBar from '../SearchBar/styled';

import StyledCardlist from './styled';

export default function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<StyledSearchBar>
				<h1>Workout Progress</h1>
			</StyledSearchBar>
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
