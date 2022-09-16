import useStore from '../../hooks/useStore';
import Card from '../Card';
import {StyledCardlist} from '../StyledCardlist/styled';
import StyledHeader from '../StyledHeader/styled';
import StyledHeadline from '../StyledHeadline/styled';

function CardlistFavorites() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const bookmarkedCards = exerciseCards.filter(exerciseCard => exerciseCard.isBookmarked);

	return (
		<>
			<StyledHeader>
				<StyledHeadline>Favorite Exercises</StyledHeadline>
			</StyledHeader>
			<StyledCardlist>
				{bookmarkedCards.map(exerciseCard => {
					return <Card key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistFavorites;
