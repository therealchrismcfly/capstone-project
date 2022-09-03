import dynamic from 'next/dynamic';

const PlannerCalendar = dynamic(() => import('../Calendar/plannerCalendar'), {
	ssr: false,
});
import useStore from '../../hooks/useStore';
import PlannerCard from '../Cards/plannerCard';
import StyledHeadline from '../Headline/styled';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const workouts = useStore(state => state.workouts);
	const plannedDate = useStore(state => state.plannedDate);
	const filteredCards = workouts.filter(
		workout => workout.date.toDateString() === plannedDate.toDateString()
	);
	const sortedCards = filteredCards.sort((a, b) => Number(a.isDone) - Number(b.isDone));

	return (
		<>
			<StyledHeadline>
				<h1>Workout Plan</h1>
			</StyledHeadline>
			<PlannerCalendar />
			<StyledCardlist>
				{sortedCards.map(workout => {
					return <PlannerCard key={workout.id} workout={workout} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
