import {exercises} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledCard from '../Card/styled';

import StyledCardlist from './styled';

function Cardlist() {
	const cards = useStore(state => state.cards);
	const addCard = useStore(state => state.addCard);
	const deleteCard = useStore(state => state.deleteCard);

	return (
		<>
			<p>Ausgewählte Übungen</p>
			{cards.map(card => {
				return (
					<StyledCard
						key={card.id}
						onClick={() => {
							deleteCard(card.id);
						}}
					>
						{card.name}
					</StyledCard>
				);
			})}
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

export default Cardlist;
