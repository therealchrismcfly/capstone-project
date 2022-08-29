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

function PlannerCard() {
	const deleteWorkout = useStore(state => state.deleteWorkout);
	const checkCard = useStore(state => state.checkCard);
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const [showText, setShowText] = useState(false);
	let [buttonText, setButtonText] = useState(true);
	const workoutPlan = useStore(state => state.workoutPlan);

	const handleChange = () => {
		return setButtonText(!buttonText);
	};

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleSetInput(input) {
		changeSets(workoutPlan.id, Number(input));
	}

	function handleRepInput(input) {
		changeReps(workoutPlan.id, Number(input));
	}

	function handleWeightInput(input) {
		changeWeight(workoutPlan.id, Number(input));
	}

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{workoutPlan.name}</StyledCardHeadline>
				<StyledDeleteButton
					onClick={() => {
						deleteWorkout(workoutPlan.id);
					}}
				>
					x
				</StyledDeleteButton>
				<StyledCheckbox
					checked={workoutPlan.checked}
					type="checkbox"
					onChange={() => {
						checkCard(workoutPlan.id);
					}}
				/>
			</StyledCardHeader>
			<StyledCardBody>
				<Image src={workoutPlan.image} alt="dummy fitness image" width={300} height={200} />
				<StyledHideButton
					onClick={() => {
						setShowText(!showText);
						handleChange();
					}}
				>
					{buttonText ? 'Show instruction' : 'Hide instruction'}
				</StyledHideButton>
				{showText ? (
					<StyledCardDescription id={workoutPlan.id}>
						{workoutPlan.description}
					</StyledCardDescription>
				) : (
					''
				)}
			</StyledCardBody>
			<form onSubmit={handleSubmit}>
				<CardFooter
					sets={workoutPlan.sets}
					reps={workoutPlan.reps}
					weight={workoutPlan.weight}
					handleSetInput={handleSetInput}
					handleRepInput={handleRepInput}
					handleWeightInput={handleWeightInput}
				/>
			</form>
		</StyledCard>
	);
}

export default PlannerCard;
