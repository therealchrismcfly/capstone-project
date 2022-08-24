import useStore from '../../hooks/useStore';
import PlannerCard from '../Card/plannerCard';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const cards = useStore(state => state.cards);

	const plannedCards = cards.filter(card => card.isPlanned);
	const sortedCard = plannedCards.sort((a, b) => Number(a.isDone) - Number(b.isDone));

	return (
		<>
			<h1>Ausgewählte Übungen</h1>
			<StyledCardlist>
				{sortedCard.map(card => {
					return <PlannerCard key={card.id} card={card} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
