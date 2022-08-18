import useStore from '../../hooks/useStore';
import StyledDeleteButton from '../Buttons/DeleteButton/styled';
import StyledCard from '../Card/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import StyledCardImage from '../CardImage/styled';

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
						<StyledCard key={card.id}>
							<StyledCardHeader>
								<StyledCardHeadline>{card.name}</StyledCardHeadline>
								<StyledDeleteButton
									onClick={() => {
										deleteCard(card.id);
									}}
								>
									delete
								</StyledDeleteButton>
							</StyledCardHeader>
							<StyledCardBody>
								<StyledCardImage src={card.image}></StyledCardImage>
								<StyledCardDescription>{card.description}</StyledCardDescription>
							</StyledCardBody>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistPlanner;
