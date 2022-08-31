import useStore from '../../hooks/useStore';
import FavoritesCard from '../Card/favoritesCard';

import StyledCardlist from './styled';

function CardlistFavorites() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const bookmarkedCards = exerciseCards.filter(exerciseCard => exerciseCard.isBookmarked);

	return (
		<>
			<h1>Lieblingsübungen</h1>

			<StyledCardlist>
				{bookmarkedCards.map(exerciseCard => {
					return <FavoritesCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
