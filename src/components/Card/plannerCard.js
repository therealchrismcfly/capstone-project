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

function PlannerCard({exerciseCard}) {
	const deleteFromPlanner = useStore(state => state.deleteFromPlanner);
	const checkCard = useStore(state => state.checkCard);

	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const [showText, setShowText] = useState(false);
	let [buttonText, setButtonText] = useState(true);

	const handleChange = () => {
		return setButtonText(!buttonText);
	};

	function handleSubmit(event) {
		event.preventDefault();
	}

	function handleSetInput(input) {
		changeSets(exerciseCard.id, Number(input));
	}

	function handleRepInput(input) {
		changeReps(exerciseCard.id, Number(input));
	}

	function handleWeightInput(input) {
		changeWeight(exerciseCard.id, Number(input));
	}

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{exerciseCard.name}</StyledCardHeadline>
				<StyledDeleteButton
					onClick={() => {
						deleteFromPlanner(exerciseCard.id);
					}}
				>
					x
				</StyledDeleteButton>
				<StyledCheckbox
					checked={exerciseCard.checked}
					type="checkbox"
					onChange={() => {
						checkCard(exerciseCard.id);
					}}
				/>
			</StyledCardHeader>
			<StyledCardBody>
				<Image
					src={exerciseCard.image}
					alt="dummy fitness image"
					width={300}
					height={200}
				/>
				<StyledHideButton
					onClick={() => {
						setShowText(!showText);
						handleChange();
					}}
				>
					{buttonText ? 'Show instruction' : 'Hide instruction'}
				</StyledHideButton>
				{showText ? (
					<StyledCardDescription id={exerciseCard.id}>
						{exerciseCard.description}
					</StyledCardDescription>
				) : (
					''
				)}
			</StyledCardBody>
			<form onSubmit={handleSubmit}>
				<CardFooter
					sets={exerciseCard.sets}
					reps={exerciseCard.reps}
					weight={exerciseCard.weight}
					handleSetInput={handleSetInput}
					handleRepInput={handleRepInput}
					handleWeightInput={handleWeightInput}
				/>
			</form>
		</StyledCard>
	);
}

export default PlannerCard;
