import useStore from '../../hooks/useStore';
import Card from '../Card';
import Searchbar from '../Searchbar';
import {StyledCardlist} from '../StyledCardlist/styled';

function CardlistHome() {
	const suggestions = useStore(state => state.suggestions);
	const exerciseCards = useStore(state => state.exerciseCards);

	return (
		<>
			<Searchbar />
			<StyledCardlist>
				{suggestions.length
					? suggestions.map(exerciseCard => {
							return <Card key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })
					: exerciseCards.map(exerciseCard => {
							return <Card key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })}
			</StyledCardlist>
		</>
	);
}

export default CardlistHome;
