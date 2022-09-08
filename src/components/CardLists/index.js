import useStore from '../../hooks/useStore';
import Card from '../Cards/card';
import Searchbar from '../Searchbar/searchbar';

import {StyledCardlist} from './styled';

function CardlistIndex() {
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

export default CardlistIndex;
