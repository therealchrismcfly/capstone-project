import {useState} from 'react';

import StyledIconButton from '../Buttons/IconButton/styled';
import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';
import CardInputWeight from '../CardInputs/weight';
import Icon from '../Icons';
import StyledCardFooter from '../StyledCardFooter/styled';

function CardFooter({workout}) {
	const [editProgress, setEditProgress] = useState(false);

	return (
		<StyledCardFooter>
			{editProgress ? (
				<>
					<CardInputSets workout={workout} />
					<CardInputReps workout={workout} />
					<CardInputWeight workout={workout} />
				</>
			) : (
				<>
					<b>Sets:</b> {workout.sets}
					<b>Reps:</b> {workout.reps}
					<b>Weight:</b> {workout.weight}
				</>
			)}
			<StyledIconButton
				type="button"
				onClick={() => {
					setEditProgress(!editProgress);
				}}
			>
				{editProgress ? (
					<Icon variant="save" size="25px" color="var(--spoiledEgg)" />
				) : (
					<Icon variant="edit" size="25px" color="var(--spoiledEgg)" />
				)}
			</StyledIconButton>
		</StyledCardFooter>
	);
}

export default CardFooter;
