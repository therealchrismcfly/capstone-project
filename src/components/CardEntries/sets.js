import useStore from '../../hooks/useStore';
import CardEntryItem from '../CardEntryItem';

export default function CardEntrySets() {
	const setsEntries = useStore(state => state.setsEntries);

	return (
		<>
			{setsEntries.map(setsEntry => (
				<CardEntryItem name={setsEntry.name} key={setsEntry.id} />
			))}
		</>
	);
}
