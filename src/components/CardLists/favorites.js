import useStore from '../../hooks/useStore';
import Card from '../Cards/card';
import StyledHeader from '../Header/styled';
import StyledHeadline from '../Headline/styled';

import {StyledCardlist} from './styled';

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
