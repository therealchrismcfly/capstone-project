import {useState} from 'react';

import StyledIconButton from '../Buttons/IconButton/styled';
import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';
import CardInputWeight from '../CardInputs/weight';
import Icon from '../Icons';

import StyledCardFooter from './styled';

function CardFooter({workout}) {
	const [editSets, setEditSets] = useState(false);
	const [editReps, setEditReps] = useState(false);
	const [editWeight, setEditWeight] = useState(false);

	return (
		<StyledCardFooter>
			{editSets ? <CardInputSets workout={workout} /> : <p>Sets: {workout.sets}</p>}
			<StyledIconButton
				type="button"
				onClick={() => {
					setEditSets(!editSets);
				}}
			>
				{editSets ? (
					<Icon variant="save" size="20px" color="black" />
				) : (
					<Icon variant="edit" size="20px" color="black" />
				)}
			</StyledIconButton>

			{editReps ? <CardInputReps workout={workout} /> : <p>Reps: {workout.reps}</p>}
			<StyledIconButton
				type="button"
				onClick={() => {
					setEditReps(!editReps);
				}}
			>
				{editReps ? (
					<Icon variant="save" size="20px" color="black" />
				) : (
					<Icon variant="edit" size="20px" color="black" />
				)}
			</StyledIconButton>

			{editWeight ? <CardInputWeight workout={workout} /> : <p>Weight: {workout.weight}</p>}
			<StyledIconButton
				type="button"
				onClick={() => {
					setEditWeight(!editWeight);
				}}
			>
				{editWeight ? (
					<Icon variant="save" size="20px" color="black" />
				) : (
					<Icon variant="edit" size="20px" color="black" />
				)}
			</StyledIconButton>
		</StyledCardFooter>
	);
}

export default CardFooter;
