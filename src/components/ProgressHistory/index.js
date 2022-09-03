import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledProgressHistoryItem from './StyledProgressHistoryItem';
import StyledProgressHistoryName from './StyledProgressHistoryName';
import StyledProgressHistoryTable from './StyledProgressHistoryTable';

export default function ProgressHistoryCard({exerciseCard}) {
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	const workouts = useStore(state => state.workouts);
	const filteredWorkouts = workouts.filter(workout => workout.name === exerciseCard.name);
	const sortedWorkouts = filteredWorkouts.sort((a, b) => Number(a.date) - Number(b.date));

	return (
		<StyledProgressHistoryItem>
			<StyledProgressHistoryName>
				<StyledCardHeadline>{exerciseCard.name}</StyledCardHeadline>
			</StyledProgressHistoryName>
			<button
				type="button"
				onClick={() => {
					setIsHistoryVisible(!isHistoryVisible);
				}}
			>
				{isHistoryVisible ? 'Hide' : 'Show'}
			</button>
			{isHistoryVisible && (
				<StyledProgressHistoryTable>
					{
						<tr>
							<th>Date</th>
							<th>Sets</th>
							<th>Reps</th>
							<th>Weight</th>
						</tr>
					}
					{sortedWorkouts.map(sortedWorkout => {
						return (
							<tr key={sortedWorkout.id}>
								<td>{sortedWorkout.date.toDateString()}</td>
								<td>{sortedWorkout.sets}</td>
								<td>{sortedWorkout.reps}</td>
								<td>{sortedWorkout.weight}</td>
							</tr>
						);
					})}
				</StyledProgressHistoryTable>
			)}
		</StyledProgressHistoryItem>
	);
}
