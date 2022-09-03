import useStore from '../../hooks/useStore';
import IndexCard from '../Cards/indexCard';
import StyledHeadline from '../Headline/styled';

import StyledCardlist from './styled';

function CardlistFavorites() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const bookmarkedCards = exerciseCards.filter(exerciseCard => exerciseCard.isBookmarked);

	return (
		<>
			<StyledHeadline>
				<h1>Favorite Exercises</h1>
			</StyledHeadline>
			<StyledCardlist>
				{bookmarkedCards.map(exerciseCard => {
					return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
