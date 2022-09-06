import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledHideButton from '../Buttons/HideButton/styled';
import StyledIconButton from '../Buttons/IconButton/styled';
const IndexCalendar = dynamic(() => import('../Calendar/indexCalendar'), {
	ssr: false,
});
import StyledCardBody from '../CardBody/styled';
import StyledCardFooter from '../CardFooter/styled';
import {StyledCardHeader, StyledCardHeaderIconContainer} from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import StyledCardInstruction from '../CardInstruction/styled';
import Icon from '../Icons';

import StyledCard from './styled';

export default function IndexCard({exerciseCard}) {
	const handleBookmark = useStore(state => state.handleBookmark);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	const workouts = useStore(state => state.workouts);
	const correspondingWorkouts = workouts.filter(workout => exerciseCard.name === workout.name);
	const pastWorkouts = correspondingWorkouts.filter(
		correspondingWorkout => new Date(correspondingWorkout.date).getTime() < new Date().getTime()
	);
	const sortedPastWorkouts = pastWorkouts.sort((a, b) => new Date(b.date) - new Date(a.date));
	const latestWorkout = sortedPastWorkouts.length
		? sortedPastWorkouts[0]
		: {sets: '0', reps: '0', weight: '0'};

	function hideCalendar() {
		setIsCalendarVisible(false);
	}

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{exerciseCard.name}</StyledCardHeadline>
				<StyledCardHeaderIconContainer>
					<StyledIconButton
						onClick={() => {
							handleBookmark(exerciseCard.id);
						}}
					>
						{exerciseCard.isBookmarked ? (
							<>
								<Icon
									variant="bookmarkFilled"
									size="30px"
									color="var(--spoiledEgg)"
									id={exerciseCard.id}
								/>
							</>
						) : (
							<Icon
								variant="bookmark"
								size="30px"
								color="var(--chromaphobicBlack)"
								id={exerciseCard.id}
							/>
						)}
					</StyledIconButton>
					<StyledIconButton
						onClick={() => {
							setIsCalendarVisible(!isCalendarVisible);
						}}
					>
						{isCalendarVisible ? (
							<Icon variant="calendarFilled" size="30px" color="var(--spoiledEgg)" />
						) : (
							<Icon variant="calendar" size="30px" color="var(--chromaphobicBlack)" />
						)}
					</StyledIconButton>
					{isCalendarVisible && (
						<IndexCalendar exercise={exerciseCard} onCalendarHide={hideCalendar} />
					)}
				</StyledCardHeaderIconContainer>
			</StyledCardHeader>
			<StyledCardBody>
				<Image
					src={exerciseCard.image}
					alt="dummy fitness image"
					width={300}
					height={300}
				/>
				<StyledHideButton
					onClick={() => {
						setIsInstructionVisible(!isInstructionVisible);
					}}
				>
					{isInstructionVisible ? 'Hide instruction' : 'Show instruction'}
				</StyledHideButton>
				{isInstructionVisible && (
					<StyledCardInstruction>{exerciseCard.instruction}</StyledCardInstruction>
				)}
			</StyledCardBody>

			<StyledCardFooter>
				<div>
					Sets: {latestWorkout.sets} {''}
					Reps: {latestWorkout.reps} {''}
					Weight: {latestWorkout.weight}
				</div>
			</StyledCardFooter>
		</StyledCard>
	);
}
