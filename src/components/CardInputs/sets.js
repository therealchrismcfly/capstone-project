import useStore from '../../hooks/useStore';

import StyledInput from './styled';
export default function CardInputSets({workout}) {
	const changeSets = useStore(state => state.changeSets);
	return (
		<label>
			Sets:{' '}
			<StyledInput
				type="number"
				name="sets"
				value={workout.sets}
				onChange={event => changeSets(workout.id, event.target.value)}
			/>
		</label>
	);
}
