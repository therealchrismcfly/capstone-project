import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledIconButton from '../Buttons/IconButton/styled';
import {StyledCardHeadlineProgress} from '../CardHeadline/styled';
import Icon from '../Icons';

import StyledProgressHistoryItem from './StyledProgressHistoryItem';
import StyledProgressHistoryName from './StyledProgressHistoryName';
import StyledProgressHistoryTable from './StyledProgressHistoryTable';

function ProgressHistoryCard({exerciseCard}) {
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	const workouts = useStore(state => state.workouts);
	const filteredWorkouts = workouts.filter(workout => workout.name === exerciseCard.name);
	const sortedWorkouts = filteredWorkouts.sort((a, b) => Number(b.date) - Number(a.date));

	return (
		<StyledProgressHistoryItem>
			<StyledProgressHistoryName>
				<StyledCardHeadlineProgress>{exerciseCard.name}</StyledCardHeadlineProgress>
				<StyledIconButton
					onClick={() => {
						setIsHistoryVisible(!isHistoryVisible);
					}}
				>
					{isHistoryVisible ? (
						<Icon variant="arrowUp" size="40px" color="var(--spoiledEgg)" />
					) : (
						<Icon variant="arrowDown" size="40px" color="var(--spoiledEgg)" />
					)}
				</StyledIconButton>
			</StyledProgressHistoryName>
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
export default ProgressHistoryCard;
