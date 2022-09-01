import useStore from '../../hooks/useStore';

import StyledInput from './styled';
export default function CardInputWeight({workout}) {
	const changeWeight = useStore(state => state.changeWeight);
	return (
		<label>
			Weight:{' '}
			<StyledInput
				type="number"
				name="weight"
				value={workout.weight}
				onChange={event => changeWeight(workout.id, event.target.value)}
			/>
		</label>
	);
}
