import {useState} from 'react';

import CardInputReps from '../CardInputs/reps';
import CardInputSets from '../CardInputs/sets';
import CardInputWeight from '../CardInputs/weight';

import StyledCardFooter from './styled';

function CardFooter({workout}) {
	const [editSets, setEditSets] = useState(false);
	const [editReps, setEditReps] = useState(false);
	const [editWeight, setEditWeight] = useState(false);

	return (
		<StyledCardFooter>
			{editSets ? (
				<>
					<CardInputSets workout={workout} />
				</>
			) : (
				<>
					<p>Sets: {workout.sets}</p>
				</>
			)}
			<button
				type="button"
				onClick={() => {
					setEditSets(!editSets);
				}}
			>
				{editSets ? 'save' : 'edit'}
			</button>

			{editReps ? (
				<>
					<CardInputReps workout={workout} />
				</>
			) : (
				<>
					<p>Reps: {workout.reps}</p>
				</>
			)}
			<button
				type="button"
				onClick={() => {
					setEditReps(!editReps);
				}}
			>
				{editReps ? 'save' : 'edit'}
			</button>

			{editWeight ? (
				<>
					<CardInputWeight workout={workout} />
				</>
			) : (
				<>
					<p>Weight: {workout.weight}</p>
				</>
			)}
			<button
				type="button"
				onClick={() => {
					setEditWeight(!editWeight);
				}}
			>
				{editWeight ? 'save' : 'edit'}
			</button>
		</StyledCardFooter>
	);
}

export default CardFooter;
