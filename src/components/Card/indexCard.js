import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import BookmarkButton from '../Buttons/BookmarkButton/button';
import FilledBookmarkIcon from '../Buttons/BookmarkButton/filled';
import NotFilledBookmarkIcon from '../Buttons/BookmarkButton/notfilled';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
const IndexCalendar = dynamic(() => import('../Calendar/indexCalendar'), {
	ssr: false,
});
import StyledHideButton from '../Buttons/HideButton/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCard from './styled';

export default function IndexCard({exerciseCard}) {
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const handleBookmark = useStore(state => state.handleBookmark);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	const addToPlanner = useStore(state => state.addToPlanner);
	const workoutPlan = useStore(state => state.workoutPlan);
	console.log(workoutPlan);

	function selectDate(selectedDate) {
		const date = selectedDate.toDateString();
		addToPlanner(date, exerciseCard.name);
		setIsCalendarVisible(false);
	}

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
				<BookmarkButton
					onClick={() => {
						handleBookmark(exerciseCard.id);
					}}
				>
					{exerciseCard.isBookmarked ? (
						<FilledBookmarkIcon id={exerciseCard.id} />
					) : (
						<NotFilledBookmarkIcon id={exerciseCard.id} />
					)}
				</BookmarkButton>
				<StyledCalendarButton
					onClick={() => {
						setIsCalendarVisible(!isCalendarVisible);
					}}
				>
					add to planner
				</StyledCalendarButton>
				{isCalendarVisible && <IndexCalendar onSelectDate={selectDate} />}
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
						setIsInstructionVisible(!isInstructionVisible);
					}}
				>
					{isInstructionVisible ? 'Hide instruction' : 'Show instruction'}
				</StyledHideButton>
				{isInstructionVisible && (
					<StyledCardDescription>{exerciseCard.instruction}</StyledCardDescription>
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
