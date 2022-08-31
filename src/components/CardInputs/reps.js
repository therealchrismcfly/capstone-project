import useStore from '../../hooks/useStore';
export default function CardInputReps({workout}) {
	const changeReps = useStore(state => state.changeReps);
	return (
		<label>
			Reps:{' '}
			<input
				type="number"
				name="reps"
				value={workout.reps}
				onChange={event => changeReps(workout.id, event.target.value)}
			/>
		</label>
	);
}
