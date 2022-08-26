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

export default function FavoritesCard({card}) {
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const debookmark = useStore(state => state.debookmark);
	const [isShown, setIsShown] = useState(false);
	const [showText, setShowText] = useState(false);
	let [buttonText, setButtonText] = useState(true);
	const [isBookmarked, setIsBookmarked] = useState(true);

	const handleChange = () => {
		return setButtonText(!buttonText);
	};

	function handleSubmit(event) {
		event.preventDefault();
	}
	function handleSetInput(input) {
		changeSets(card.id, Number(input));
	}

	function handleRepInput(input) {
		changeReps(card.id, Number(input));
	}

	function handleWeightInput(input) {
		changeWeight(card.id, Number(input));
	}

	return (
		<StyledCard>
			<StyledCardHeader>
				<StyledCardHeadline>{card.name}</StyledCardHeadline>
				<BookmarkButton
					onClick={() => {
						debookmark(card.id);
						setIsBookmarked(!isBookmarked);
					}}
				>
					{isBookmarked ? (
						<FilledBookmarkIcon id={card.id} />
					) : (
						<NotFilledBookmarkIcon id={card.id} />
					)}
				</BookmarkButton>
				<StyledCalendarButton
					onClick={() => {
						setIsShown(!isShown);
					}}
				>
					add to planner
				</StyledCalendarButton>
				{isShown ? <IndexCalendar id={card.id} /> : ''}
			</StyledCardHeader>
			<StyledCardBody>
				<Image src={card.image} alt="dummy fitness image" width={300} height={200} />
				<StyledHideButton
					onClick={() => {
						setShowText(!showText);
						handleChange();
					}}
				>
					{buttonText ? 'Show instruction' : 'Hide instruction'}
				</StyledHideButton>
				{showText ? (
					<StyledCardDescription id={card.id}>{card.description}</StyledCardDescription>
				) : (
					''
				)}
			</StyledCardBody>
			<form onSubmit={handleSubmit}>
				<CardFooter
					sets={card.sets}
					reps={card.reps}
					weight={card.weight}
					handleSetInput={handleSetInput}
					handleRepInput={handleRepInput}
					handleWeightInput={handleWeightInput}
				/>
			</form>
		</StyledCard>
	);
}
