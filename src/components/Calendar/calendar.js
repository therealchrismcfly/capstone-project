import {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TheCalendar() {
	const [date, setDate] = useState(new Date());

	return (
		<>
			<h1>React Calendar</h1>
			<Calendar onChange={setDate} value={date} />
			<p>SelectedDate: {date.toDateString()}</p>
		</>
	);
}

export default TheCalendar;
