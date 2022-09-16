import dynamic from 'next/dynamic';

const PlannerCalendar = dynamic(() => import('../PlannerCalendar/index'), {
	ssr: false,
});
import useStore from '../../hooks/useStore';
import PlannedCard from '../PlannedCard';
import {StyledCardlistPlanner} from '../StyledCardlist/styled';
import StyledHeader from '../StyledHeader/styled';
import StyledHeadline from '../StyledHeadline/styled';

function CardlistPlanner() {
	const workouts = useStore(state => state.workouts);
	const plannedDate = useStore(state => state.plannedDate);
	const filteredCards = workouts.filter(
		workout => workout.date.toDateString() === plannedDate.toDateString()
	);
	const sortedCards = filteredCards.sort((a, b) => Number(a.isDone) - Number(b.isDone));

	return (
		<>
			<StyledHeader>
				<StyledHeadline>Workout Plan</StyledHeadline>
			</StyledHeader>
			<PlannerCalendar />
			<StyledCardlistPlanner>
				{sortedCards.map(workout => {
					return <PlannedCard key={workout.id} workout={workout} />;
				})}
			</StyledCardlistPlanner>
		</>
	);
}

export default CardlistPlanner;
