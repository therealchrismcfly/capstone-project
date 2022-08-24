export default function CardInputSets({sets, handleSetInput}) {
	return (
		<label>
			Sets:{' '}
			<input
				type="text"
				name="sets"
				value={sets}
				onChange={event => handleSetInput(event.target.value)}
			/>
		</label>
	);
}
