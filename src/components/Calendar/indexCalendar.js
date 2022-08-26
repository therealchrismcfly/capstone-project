import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import StyledCalendar from './styled';

import 'react-calendar/dist/Calendar.css';
function IndexCalendar({id}) {
	const addToPlanner = useStore(state => state.addToPlanner);

	function handleChange(selectedDate) {
		const date = selectedDate.toDateString();
		addToPlanner(id, date);
	}

	return (
		<StyledCalendar>
			<Calendar onChange={handleChange} />
		</StyledCalendar>
	);
}

export default IndexCalendar;
