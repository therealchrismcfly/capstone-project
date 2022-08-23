import Image from 'next/image';

import useStore from '../../hooks/useStore';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCard from './styled';

export default function IndexCard({exercise}) {
	const addToPlanner = useStore(state => state.addToPlanner);
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);

	function handleSubmit(event) {
		event.preventDefault();
	}
	function handleSetInput(input) {
		changeSets(exercise.id, Number(input));
	}

	function handleRepInput(input) {
		changeReps(exercise.id, Number(input));
	}
	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{exercise.name}</StyledCardHeadline>
				<StyledCalendarButton
					onClick={() => {
						addToPlanner(exercise.id);
					}}
				>
					{'add to planner'}
				</StyledCalendarButton>
			</StyledCardHeader>
			<StyledCardBody>
				<Image src={exercise.image} alt="dummy fitness image" width={300} height={200} />
				<StyledCardDescription>{exercise.description}</StyledCardDescription>
			</StyledCardBody>
			<form onSubmit={handleSubmit}>
				<CardFooter
					sets={exercise.sets}
					reps={exercise.reps}
					handleSetInput={handleSetInput}
					handleRepInput={handleRepInput}
				></CardFooter>
			</form>
		</StyledCard>
	);
}
