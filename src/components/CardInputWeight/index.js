import useStore from '../../hooks/useStore';
import StyledCardInput from '../StyledCardInput/styled';
function CardInputWeight({workout}) {
	const changeWeight = useStore(state => state.changeWeight);
	return (
		<label>
			Weight:{' '}
			<StyledCardInput
				type="number"
				min="0"
				name="weight"
				value={workout.weight}
				onChange={event => changeWeight(workout.id, event.target.value)}
			/>
		</label>
	);
}
export default CardInputWeight;
