import useStore from '../../hooks/useStore';
import IndexCard from '../Card/indexCard';

import StyledCardlist from './styled';

function CardlistIndex() {
	const exerciseCards = useStore(state => state.exerciseCards);
	return (
		<>
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{exerciseCards.map(exerciseCard => {
					return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
