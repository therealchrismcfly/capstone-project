import useStore from '../../hooks/useStore';
import StyledCard from '../Card/styled';
import StyledHeadline from '../CardHeadline/styled';

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
							<StyledHeadline>{card.name}</StyledHeadline>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
