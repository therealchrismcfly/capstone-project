import useStore from '../../hooks/useStore';
import StyledCardInput from '../StyledCardInput/styled';
function CardInputSets({workout}) {
	const changeSets = useStore(state => state.changeSets);
	return (
		<label>
			Sets:{' '}
			<StyledCardInput
				type="number"
				min="0"
				name="sets"
				value={workout.sets}
				onChange={event => changeSets(workout.id, event.target.value)}
			/>
		</label>
	);
}
export default CardInputSets;
