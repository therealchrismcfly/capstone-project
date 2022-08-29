import dynamic from 'next/dynamic';

const PlannerCalendar = dynamic(() => import('../Calendar/plannerCalendar'), {
	ssr: false,
});
import useStore from '../../hooks/useStore';
import PlannerCard from '../Card/plannerCard';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const exerciseCards = useStore(state => state.exerciseCards);
	const plannedDate = useStore(state => state.plannedDate);
	const filteredCards = exerciseCards.filter(plannedCard =>
		plannedCard.date.includes(plannedDate)
	);
	const sortedCards = filteredCards.sort((a, b) => Number(a.isDone) - Number(b.isDone));

	return (
		<>
			<h1>Geplante Übungen</h1>
			<PlannerCalendar />
			<StyledCardlist>
				{sortedCards.map(exerciseCard => {
					return <PlannerCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
