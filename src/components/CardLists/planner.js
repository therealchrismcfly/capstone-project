import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledDeleteButton from '../Buttons/DeleteButton/styled';
import StyledCard from '../Card/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import Checkbox from '../Checkbox/index';

import StyledCardlist from './styled';

function CardlistPlanner() {
	const cards = useStore(state => state.cards);
	const deleteCard = useStore(state => state.deleteCard);
	const checkCard = useStore(state => state.checkCard);
	const sortedCard = cards.sort((a, b) => Number(a.isChecked) - Number(b.isChecked));

	return (
		<>
			<h1>Ausgewählte Übungen</h1>
			<StyledCardlist>
				{sortedCard.map(card => {
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
								<Checkbox
									checked={card.isChecked}
									onChange={() => {
										checkCard(card.id);
									}}
								/>
							</StyledCardHeader>
							<StyledCardBody>
								<Image
									src={card.image}
									alt="dummy fitness image"
									width={300}
									height={200}
								/>{' '}
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
