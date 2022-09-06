import useStore from '../../hooks/useStore';

import StyledInput from './styled';
export default function CardInputReps({workout}) {
	const changeReps = useStore(state => state.changeReps);
	return (
		<label>
			Reps:{' '}
			<StyledInput
				type="number"
				min="0"
				name="reps"
				value={workout.reps}
				onChange={event => changeReps(workout.id, event.target.value)}
			/>
		</label>
	);
}
