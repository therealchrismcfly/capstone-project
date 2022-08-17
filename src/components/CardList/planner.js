import useStore from '../../hooks/useStore';
import StyledCard from '../Card/styled';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const cards = useStore(state => state.cards);
	const deleteCard = useStore(state => state.deleteCard);

	return (
		<>
			<p>Ausgewählte Übungen</p>
			<StyledCardlist>
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
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
