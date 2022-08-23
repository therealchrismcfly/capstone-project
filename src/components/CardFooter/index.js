import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';

import StyledCardFooter from './styled';

function CardFooter({sets, reps, handleSetInput, handleRepInput}) {
	return (
		<StyledCardFooter>
			<CardInputSets handleSetInput={handleSetInput} sets={sets} />
			{sets}
			<CardInputReps handleRepInput={handleRepInput} reps={reps} /> {reps}
		</StyledCardFooter>
	);
}

export default CardFooter;
