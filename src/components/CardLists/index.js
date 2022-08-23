import useStore from '../../hooks/useStore';
import IndexCard from '../Card/indexCard';

import StyledCardlist from './styled';

function CardlistIndex() {
	const exercises = useStore(state => state.exercises);
	return (
		<>
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{exercises.map(exercise => {
					return <IndexCard key={exercise.id} exercise={exercise} />;
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
