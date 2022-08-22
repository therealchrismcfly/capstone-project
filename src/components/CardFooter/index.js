import CardEntryReps from '../CardEntries/reps';
import CardEntrySets from '../CardEntries/sets';
import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';

import StyledCardFooter from './styled';

function CardFooter() {
	return (
		<StyledCardFooter>
			<CardInputSets />
			<CardEntrySets />
			<CardInputReps />
			<CardEntryReps />
		</StyledCardFooter>
	);
}

export default CardFooter;
