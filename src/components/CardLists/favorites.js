import useStore from '../../hooks/useStore';
import IndexCard from '../Cards/indexCard';
import StyledSearchBar from '../Searchbar/styled';

import StyledCardlist from './styled';

function CardlistFavorites() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const bookmarkedCards = exerciseCards.filter(exerciseCard => exerciseCard.isBookmarked);

	return (
		<>
			<StyledSearchBar>
				<h1>Favorite Exercises</h1>
			</StyledSearchBar>
			<StyledCardlist>
				{bookmarkedCards.map(exerciseCard => {
					return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
