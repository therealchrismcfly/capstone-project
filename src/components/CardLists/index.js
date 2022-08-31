import useStore from '../../hooks/useStore';
import IndexCard from '../Card/indexCard';
import SearchBar from '../Searchbar/searchbar';

import StyledCardlist from './styled';

function CardlistIndex() {
	const suggestions = useStore(state => state.suggestions);
	const exerciseCards = useStore(state => state.exerciseCards);
	return (
		<>
			<SearchBar />
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{suggestions.length
					? suggestions.map(exerciseCard => {
							return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })
					: exerciseCards.map(exerciseCard => {
							return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
