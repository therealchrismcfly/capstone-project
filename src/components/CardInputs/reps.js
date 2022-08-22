import useStore from '../../hooks/useStore';

export default function CardInputReps() {
	const addRepentry = useStore(state => state.addRepentry);

	function handleSubmit(event) {
		event.preventDefault();

		addRepentry(event.target.elements.reps.value);

		event.target.reset();
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>
					Reps:
					<input type="text" name="reps" />
				</label>
			</form>
		</>
	);
}
