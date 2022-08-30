import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledDeleteButton from '../Buttons/DeleteButton/styled';
import StyledHideButton from '../Buttons/HideButton/styled';
import StyledCard from '../Card/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import StyledCheckbox from '../Checkbox/styled';

function PlannerCard({workout}) {
	const deleteWorkout = useStore(state => state.deleteWorkout);
	const checkCard = useStore(state => state.checkCard);
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	/* const exerciseCards = useStore(state => state.exerciseCards);
	const selectedExerciseCard = exerciseCards.filter(exerciseCard => {
		exerciseCard.name === workout.name;
	});*/

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleSetInput(input) {
		changeSets(workout.id, Number(input));
	}

	function handleRepInput(input) {
		changeReps(workout.id, Number(input));
	}

	function handleWeightInput(input) {
		changeWeight(workout.id, Number(input));
	}

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
			<form onSubmit={handleSubmit}>
				<CardFooter
					sets={workout.sets}
					reps={workout.reps}
					weight={workout.weight}
					handleSetInput={handleSetInput}
					handleRepInput={handleRepInput}
					handleWeightInput={handleWeightInput}
				/>
			</form>
		</StyledCard>
	);
}

export default PlannerCard;
