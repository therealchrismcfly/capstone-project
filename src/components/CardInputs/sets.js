export default function CardInputSets({sets, handleSetInput}) {
	return (
		<label>
			sets{' '}
			<input
				type="text"
				name="sets"
				value={sets}
				onChange={event => handleSetInput(event.target.value)}
			></input>
		</label>
	);
}
