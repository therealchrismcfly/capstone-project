import {exercises} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledCard from '../Card/styled';

import StyledCardlist from './styled';

function CardlistIndex() {
	const addCard = useStore(state => state.addCard);

	return (
		<>
			<p>Alle Übungen</p>
			<StyledCardlist>
				{exercises.map(exercise => {
					return (
						<StyledCard
							key={exercise._id}
							onClick={() => {
								addCard(exercise.name);
							}}
						>
							{exercise.name}
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
