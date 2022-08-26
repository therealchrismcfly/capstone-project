/* import {useState} from 'react';
 */ import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import StyledCalendar from './styled';

import 'react-calendar/dist/Calendar.css';
function TheCalendar({id}) {
	/* 	const [date, setDate] = useState(new Date());
	 */ const addToPlanner = useStore(state => state.addToPlanner);

	function handleChange(selectedDate) {
		const date = selectedDate.toDateString();
		addToPlanner(id, date);
	}

	return (
		<StyledCalendar>
			<h1>React Calendar</h1>
			<Calendar onChange={handleChange} />
			{/* <p>SelectedDate: {date.toDateString()}</p> */}
		</StyledCalendar>
	);
}

export default TheCalendar;
