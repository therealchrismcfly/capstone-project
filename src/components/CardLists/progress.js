import useStore from '../../hooks/useStore';
import ProgressHistoryCard from '../Cards/progressHistoryCard';

import StyledCardlist from './styled';

export default function CardlistProgress() {
	const workouts = useStore(state => state.workouts);

	return (
		<>
			<h1>Progress History</h1>
			<StyledCardlist>
				{workouts.map(workout => {
					return <ProgressHistoryCard key={workout.id} workout={workout} />;
				})}
			</StyledCardlist>
		</>
	);
}
