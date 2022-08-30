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
import StyledCardFooter from '../CardFooter/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCard from './styled';

export default function IndexCard({exerciseCard}) {
	const handleBookmark = useStore(state => state.handleBookmark);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	const addToPlanner = useStore(state => state.addToPlanner);
	const workouts = useStore(state => state.workouts);
	const currentExercises = workouts.filter(workout => exerciseCard.name === workout.name);
	const sortedCurrentExercises = currentExercises.sort(
		(a, b) => new Date(b.date) - new Date(a.date)
	);
	const latestStats = sortedCurrentExercises.length
		? sortedCurrentExercises[0]
		: {sets: '0', reps: '0', weight: '0'};

	function selectDate(selectedDate) {
		const date = selectedDate.toDateString();
		addToPlanner(
			date,
			exerciseCard.name,
			latestStats.sets,
			latestStats.reps,
			latestStats.weight
		);
		setIsCalendarVisible(false);
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
			<StyledCardFooter>
				Latest sets: {latestStats.sets} Latest reps: {latestStats.reps} Latest weight:{' '}
				{latestStats.weight}
			</StyledCardFooter>
		</StyledCard>
	);
}
