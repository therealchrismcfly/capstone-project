import useStore from '../../hooks/useStore';
import StyledCardInput from '../StyledCardInput/styled';
function CardInputReps({workout}) {
	const changeReps = useStore(state => state.changeReps);
	return (
		<label>
			Reps:{' '}
			<StyledCardInput
				type="number"
				min="0"
				name="reps"
				value={workout.reps}
				onChange={event => changeReps(workout.id, event.target.value)}
			/>
		</label>
	);
}

export default CardInputReps;
