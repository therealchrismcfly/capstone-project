import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledDeleteButton from '../Buttons/DeleteButton/styled';
import StyledHideButton from '../Buttons/HideButton/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import StyledCheckbox from '../Checkbox/styled';

import StyledCard from './styled';

function PlannerCard({workout}) {
	const deleteWorkout = useStore(state => state.deleteWorkout);
	const checkCard = useStore(state => state.checkCard);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{workout.name}</StyledCardHeadline>
				<StyledDeleteButton
					onClick={() => {
						deleteWorkout(workout.id);
					}}
				>
					x
				</StyledDeleteButton>
				<StyledCheckbox
					checked={workout.checked}
					type="checkbox"
					onChange={() => {
						checkCard(workout.id);
					}}
				/>
			</StyledCardHeader>
			<StyledCardBody>
				{<Image src={workout.image} alt="dummy fitness image" width={300} height={200} />}
				<StyledHideButton
					onClick={() => {
						setIsInstructionVisible(!isInstructionVisible);
					}}
				>
					{isInstructionVisible ? 'Hide instruction' : 'Show instruction'}
				</StyledHideButton>
				{isInstructionVisible && (
					<StyledCardDescription>{workout.instruction}</StyledCardDescription>
				)}
			</StyledCardBody>

			<CardFooter workout={workout} />
		</StyledCard>
	);
}

export default PlannerCard;
