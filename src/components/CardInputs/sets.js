import useStore from '../../hooks/useStore';
export default function CardInputSets({workout}) {
	const changeSets = useStore(state => state.changeSets);
	return (
		<label>
			Sets:{' '}
			<input
				type="number"
				name="sets"
				value={workout.sets}
				onChange={event => changeSets(workout.id, event.target.value)}
			/>
		</label>
	);
}
