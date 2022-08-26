import dynamic from 'next/dynamic';
import Image from 'next/image';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledCalendarButton from '../Buttons/CalendarButton/styled';
const TheCalendar = dynamic(() => import('../Calendar/calendar'), {
	ssr: false,
});
import StyledCardBody from '../CardBody/styled';
import StyledCardDescription from '../CardDescription/styled';
import CardFooter from '../CardFooter';
import StyledCardHeader from '../CardHeader/styled';
import StyledCardHeadline from '../CardHeadline/styled';

import StyledCard from './styled';

export default function IndexCard({card}) {
	const changeSets = useStore(state => state.changeSets);
	const changeReps = useStore(state => state.changeReps);
	const changeWeight = useStore(state => state.changeWeight);
	const [isShown, setIsShown] = useState(false);

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
				<StyledCalendarButton
					onClick={() => {
						setIsShown(!isShown);
					}}
				>
					add to planner
				</StyledCalendarButton>
				{isShown ? <TheCalendar /> : ''}
			</StyledCardHeader>
			<StyledCardBody>
				<Image src={card.image} alt="dummy fitness image" width={300} height={200} />
				<StyledCardDescription>{card.description}</StyledCardDescription>
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
