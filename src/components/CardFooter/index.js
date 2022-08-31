import {useState} from 'react';

import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';
import CardInputWeight from '../CardInputs/weight';

import StyledCardFooter from './styled';

function CardFooter({workout}) {
	const [edit, setEdit] = useState(false);
	return (
		<StyledCardFooter>
			{edit ? (
				<>
					<CardInputSets workout={workout} />
					<CardInputReps workout={workout} />
					<CardInputWeight workout={workout} />
				</>
			) : (
				<>
					<p>Sets: {workout.sets}</p>
					<p>Reps: {workout.reps}</p>
					<p>Weight: {workout.weight}</p>
				</>
			)}
			<button
				type="button"
				onClick={() => {
					setEdit(!edit);
				}}
			>
				{edit ? 'save' : 'edit'}
			</button>
		</StyledCardFooter>
	);
}

export default CardFooter;
