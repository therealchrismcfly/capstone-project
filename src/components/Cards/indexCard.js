import closestTo from 'date-fns/closestTo';
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
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';
import StyledCardInstruction from '../CardInstruction/styled';
import Icon from '../Icons';

import StyledCard from './styled';

export default function IndexCard({exerciseCard}) {
	const handleBookmark = useStore(state => state.handleBookmark);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	const addToPlanner = useStore(state => state.addToPlanner);
	const workouts = useStore(state => state.workouts);
	const correspondingExercises = workouts.filter(workout => exerciseCard.name === workout.name);
	const dateToCompare = new Date();
	const latestProgress = closestTo(dateToCompare, [correspondingExercises.date]);
	console.log(latestProgress);

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{exerciseCard.name}</StyledCardHeadline>
				<StyledIconButton
					onClick={() => {
						handleBookmark(exerciseCard.id);
					}}
				>
					{exerciseCard.isBookmarked ? (
						<>
							<Icon
								variant="bookmarkFilled"
								size="35px"
								color="var(--spoiledEgg)"
								id={exerciseCard.id}
							/>
						</>
					) : (
						<Icon variant="bookmark" size="35px" color="black" id={exerciseCard.id} />
					)}
				</StyledIconButton>
				<StyledIconButton
					onClick={() => {
						setIsCalendarVisible(!isCalendarVisible);
					}}
				>
					<Icon variant="calendar" size="35px" color="black" />
				</StyledIconButton>
				{isCalendarVisible && (
					<>
						<IndexCalendar exercise={exerciseCard} />
						{
							<button
								type="button"
								onClick={() => {
									addToPlanner(exerciseCard.id);
									setIsCalendarVisible(false);
								}}
							>
								+
							</button>
						}
					</>
				)}
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
			<StyledCardFooter></StyledCardFooter>
		</StyledCard>
	);
}
