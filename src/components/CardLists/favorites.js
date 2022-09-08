import useStore from '../../hooks/useStore';
import IndexCard from '../Cards/indexCard';
import StyledHeader from '../Header/styled';

import {StyledCardlist} from './styled';

function CardlistFavorites() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const bookmarkedCards = exerciseCards.filter(exerciseCard => exerciseCard.isBookmarked);

	return (
		<>
			<StyledHeader>
				<h1>FFFFavorite Exercises</h1>
			</StyledHeader>
			<StyledCardlist>
				{bookmarkedCards.map(exerciseCard => {
					return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
