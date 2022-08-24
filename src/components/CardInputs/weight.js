export default function CardInputWeight({weight, handleWeightInput}) {
	return (
		<label>
			Weight:{' '}
			<input
				type="text"
				name="weight"
				value={weight}
				onChange={event => handleWeightInput(event.target.value)}
			></input>
		</label>
	);
}
