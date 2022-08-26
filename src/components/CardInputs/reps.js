export default function CardInputReps({reps, handleRepInput}) {
	return (
		<label>
			Reps:{' '}
			<input
				type="text"
				name="reps"
				value={reps}
				onChange={event => handleRepInput(event.target.value)}
			/>
		</label>
	);
}
