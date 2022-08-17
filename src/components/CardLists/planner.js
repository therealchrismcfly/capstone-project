import useStore from '../../hooks/useStore';
import StyledCard from '../Card/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const cards = useStore(state => state.cards);
	const deleteCard = useStore(state => state.deleteCard);

	return (
		<>
			<h1>Ausgewählte Übungen</h1>
			<StyledCardlist>
				{cards.map(card => {
					return (
						<StyledCard
							key={card.id}
							onClick={() => {
								deleteCard(card.id);
							}}
						>
							<StyledCardHeader>
								<StyledHeadline>{card.name}</StyledHeadline>
							</StyledCardHeader>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
