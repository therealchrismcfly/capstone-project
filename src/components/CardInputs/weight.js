import useStore from '../../hooks/useStore';
export default function CardInputWeight({workout}) {
	const changeWeight = useStore(state => state.changeWeight);
	return (
		<label>
			Weight:{' '}
			<input
				type="number"
				name="weight"
				value={workout.weight}
				onChange={event => changeWeight(workout.id, event.target.value)}
			/>
		</label>
	);
}
