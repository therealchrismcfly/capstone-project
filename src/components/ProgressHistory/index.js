import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledIconButton from '../Buttons/IconButton/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import Icon from '../Icons';

import StyledProgressHistoryItem from './StyledProgressHistoryItem';
import StyledProgressHistoryName from './StyledProgressHistoryName';
import StyledProgressHistoryTable from './StyledProgressHistoryTable';

export default function ProgressHistoryCard({exerciseCard}) {
	const [isHistoryVisible, setIsHistoryVisible] = useState(true);
	const workouts = useStore(state => state.workouts);
	const filteredWorkouts = workouts.filter(workout => workout.name === exerciseCard.name);
	const sortedWorkouts = filteredWorkouts.sort((a, b) => Number(a.date) - Number(b.date));

	return (
		<StyledProgressHistoryItem>
			<StyledProgressHistoryName>
				<StyledCardHeadline>{exerciseCard.name}</StyledCardHeadline>
				<StyledIconButton
					onClick={() => {
						setIsHistoryVisible(!isHistoryVisible);
					}}
				>
					{isHistoryVisible ? (
						<Icon variant="arrowUp" size="20px" color="black" />
					) : (
						<Icon variant="arrowDown" size="20px" color="black" />
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
