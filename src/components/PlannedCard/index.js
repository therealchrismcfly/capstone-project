import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledIconButton from '../Buttons/IconButton/styled';
import StyledShowButton from '../Buttons/ShowButton/styled';
import CardFooter from '../CardFooter/index';
import Icon from '../Icons';
import StyledCard from '../StyledCard/styled';
import StyledCardBody from '../StyledCardBody/styled';
import {StyledCardHeader, StyledCardHeaderIconContainer} from '../StyledCardHeader/styled';
import {StyledCardHeadline} from '../StyledCardHeadline/styled';
import StyledCardInstruction from '../StyledCardInstruction/styled';
import StyledCheckbox from '../StyledCheckbox/styled';

function PlannedCard({workout}) {
	const deleteWorkout = useStore(state => state.deleteWorkout);
	const checkCard = useStore(state => state.checkCard);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{workout.name}</StyledCardHeadline>
				<StyledCardHeaderIconContainer>
					<StyledIconButton
						onClick={() => {
							deleteWorkout(workout.id);
						}}
					>
						<Icon variant="delete" size="30px" color="var(--chromaphobicBlack)" />
					</StyledIconButton>
					<StyledCheckbox
						checked={workout.checked}
						type="checkbox"
						onChange={() => {
							checkCard(workout.id);
						}}
					/>
				</StyledCardHeaderIconContainer>
			</StyledCardHeader>
			<StyledCardBody>
				{<Image src={workout.image} alt="dummy fitness image" width={300} height={300} />}
				<StyledShowButton
					onClick={() => {
						setIsInstructionVisible(!isInstructionVisible);
					}}
				>
					{isInstructionVisible ? 'HIDE INSTRUCTION' : 'SHOW INSTRUCTION'}
				</StyledShowButton>
				{isInstructionVisible && (
					<StyledCardInstruction>{workout.instruction}</StyledCardInstruction>
				)}
			</StyledCardBody>

			<CardFooter workout={workout} />
		</StyledCard>
	);
}

export default PlannedCard;
