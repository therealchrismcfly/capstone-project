import useStore from '../../hooks/useStore';
import IndexCard from '../Card/indexCard';

import StyledCardlist from './styled';

function CardlistIndex() {
	const cards = useStore(state => state.cards);
	return (
		<>
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{cards.map(card => {
					return <IndexCard key={card.id} card={card} />;
				})}
				{console.log(cards)}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
