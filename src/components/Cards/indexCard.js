import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import BookmarkButton from '../Buttons/BookmarkButton/button';
import FilledBookmarkIcon from '../Buttons/BookmarkButton/filled';
import UnfilledBookmarkIcon from '../Buttons/BookmarkButton/unfilled';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import UnfilledCalendarIcon from '../Buttons/CalendarButton/unfilled';
const IndexCalendar = dynamic(() => import('../Calendar/indexCalendar'), {
	ssr: false,
});
import StyledHideButton from '../Buttons/HideButton/styled';
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter/styled';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCard from './styled';

export default function IndexCard({exerciseCard}) {
	const handleBookmark = useStore(state => state.handleBookmark);
	const [isCalendarVisible, setIsCalendarVisible] = useState(false);
	const [isInstructionVisible, setIsInstructionVisible] = useState(false);
	const addToPlanner = useStore(state => state.addToPlanner);

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
						<>
							<FilledBookmarkIcon id={exerciseCard.id} />
						</>
					) : (
						<UnfilledBookmarkIcon id={exerciseCard.id} />
					)}
				</BookmarkButton>
				<StyledCalendarButton
					onClick={() => {
						setIsCalendarVisible(!isCalendarVisible);
					}}
				>
					<UnfilledCalendarIcon />
				</StyledCalendarButton>
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
					<StyledCardDescription>{exerciseCard.instruction}</StyledCardDescription>
				)}
			</StyledCardBody>
			<CardFooter>Letzter Wert für Sets, Weight, Reps</CardFooter>
		</StyledCard>
	);
}
