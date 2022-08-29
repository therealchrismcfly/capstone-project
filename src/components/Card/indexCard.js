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
	const bookmarked = useStore(state => state.bookmarked);
	const [isShown, setIsShown] = useState(false);
	const [showText, setShowText] = useState(false);
	let [buttonText, setButtonText] = useState(true);
	const [isBookmarked, setIsBookmarked] = useState(false);
	const exerciseCards = useStore(state => state.exerciseCards);

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
				<BookmarkButton
					onClick={() => {
						bookmarked(exerciseCard.id);
						setIsBookmarked(!isBookmarked);
					}}
				>
					{exerciseCards[exerciseCard.id].isBookmarked ? (
						<FilledBookmarkIcon id={exerciseCard.id} />
					) : (
						<NotFilledBookmarkIcon id={exerciseCard.id} />
					)}
				</BookmarkButton>
				<StyledCalendarButton
					onClick={() => {
						setIsShown(!isShown);
					}}
				>
					add to planner
				</StyledCalendarButton>
				{isShown ? <IndexCalendar id={exerciseCard.id} /> : ''}
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
