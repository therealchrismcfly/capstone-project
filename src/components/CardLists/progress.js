import useStore from '../../hooks/useStore';
import ProgressHistoryCard from '../ProgressHistory/index';
import StyledSearchBar from '../Searchbar/styled';

import {StyledCardlistProgress} from './styled';

export default function CardlistProgress() {
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<StyledSearchBar>
				<h1>Workout Progress</h1>
			</StyledSearchBar>
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
