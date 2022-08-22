import useStore from '../../hooks/useStore';

export default function CardInputSets() {
	const addSetentry = useStore(state => state.addSetentry);

	function handleSubmit(event) {
		event.preventDefault();

		addSetentry(event.target.elements.sets.value);

		event.target.reset();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Sets:
					<input type="text" name="sets" />
				</label>
			</form>
		</>
	);
}
