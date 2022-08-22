import useStore from '../../hooks/useStore';
import CardEntryItem from '../CardEntryItem';

export default function CardEntryReps() {
	const repsEntries = useStore(state => state.repsEntries);

	return (
		<>
			{repsEntries.map(repsEntry => (
				<CardEntryItem name={repsEntry.name} key={repsEntry.id} />
			))}
		</>
	);
}
