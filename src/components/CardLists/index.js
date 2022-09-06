import useStore from '../../hooks/useStore';
import IndexCard from '../Cards/indexCard';
import SearchBar from '../Searchbar/searchbar';
import StyledSearchBar from '../SearchBar/styled';

import StyledCardlist from './styled';

function CardlistIndex() {
	const suggestions = useStore(state => state.suggestions);
	const exerciseCards = useStore(state => state.exerciseCards);
	return (
		<>
			<StyledSearchBar>
				<SearchBar />
			</StyledSearchBar>
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
