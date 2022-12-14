import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledIconButton from '../Buttons/IconButton/styled';
import StyledShowButton from '../Buttons/ShowButton/styled';
const HomeCalendar = dynamic(() => import('../HomeCalendar/index'), {
	ssr: false,
});
import Icon from '../Icons';
import StyledCard from '../StyledCard/styled';
import StyledCardBody from '../StyledCardBody/styled';
import StyledCardFooter from '../StyledCardFooter/styled';
import {StyledCardHeader, StyledCardHeaderIconContainer} from '../StyledCardHeader/styled';
import {StyledCardHeadline} from '../StyledCardHeadline/styled';
import StyledCardInstruction from '../StyledCardInstruction/styled';

function Card({exerciseCard}) {
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
						<HomeCalendar exercise={exerciseCard} onCalendarHide={hideCalendar} />
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
				<StyledShowButton
					onClick={() => {
						setIsInstructionVisible(!isInstructionVisible);
					}}
				>
					{isInstructionVisible ? 'HIDE INSTRUCTION' : 'SHOW INSTRUCTION'}
				</StyledShowButton>
				{isInstructionVisible && (
					<StyledCardInstruction>{exerciseCard.instruction}</StyledCardInstruction>
				)}
			</StyledCardBody>

			<StyledCardFooter>
				<p>
					<b>Sets:</b> {latestWorkout.sets}
				</p>
				<p>
					<b>Reps:</b> {latestWorkout.reps}
				</p>
				<p>
					<b>Weight: </b>
					{latestWorkout.weight}
				</p>
			</StyledCardFooter>
		</StyledCard>
	);
}

export default Card;
