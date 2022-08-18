import Image from 'next/image';

import {exercises} from '../../../backend/db';
import useStore from '../../hooks/useStore';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledCard from '../Card/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

function CardlistIndex() {
	const addCard = useStore(state => state.addCard);

	return (
		<>
			<h1>Alle Übungen</h1>
			<StyledCardlist>
				{exercises.map(exercise => {
					return (
						<StyledCard key={exercise.id}>
							<StyledCardHeader>
								<StyledCardHeadline>{exercise.name}</StyledCardHeadline>
								<StyledCalendarButton
									onClick={() => {
										addCard(
											exercise.name,
											exercise.image,
											exercise.description
										);
									}}
								>
									{'add to planner'}
								</StyledCalendarButton>
							</StyledCardHeader>
							<StyledCardBody>
								<Image
									src={exercise.image}
									alt="dummy fitness image"
									width={300}
									height={200}
								/>
								<StyledCardDescription>
									{exercise.description}
								</StyledCardDescription>
							</StyledCardBody>
						</StyledCard>
					);
				})}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
