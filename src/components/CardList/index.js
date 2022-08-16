import {exercises} from '../../../backend/db';
import StyledCard from '../Card/styled';
import useStore from '../hooks/useStore';

import StyledCardlist from './styled';

function Cardlist() {
	const cards = useStore(state => state.cards);
	const addCard = useStore(state => state.addCard);

	return (
		<>
			<p>Ausgewählte Übungen</p>
			{cards.map(card => {
				return <StyledCard key={card.id}>{card.name}</StyledCard>;
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
