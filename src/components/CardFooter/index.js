import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';
import CardInputWeight from '../CardInputs/weight';

import StyledCardFooter from './styled';

function CardFooter({sets, reps, weight, handleSetInput, handleRepInput, handleWeightInput}) {
	return (
		<StyledCardFooter>
			<CardInputSets handleSetInput={handleSetInput} sets={sets} />
			{sets}
			<CardInputReps handleRepInput={handleRepInput} reps={reps} /> {reps}
			<CardInputWeight handleWeightInput={handleWeightInput} weight={weight} /> {weight}
		</StyledCardFooter>
	);
}

export default CardFooter;
