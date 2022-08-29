import Calendar from 'react-calendar';

import StyledCalendar from './styled';

import 'react-calendar/dist/Calendar.css';
function IndexCalendar({onSelectDate}) {
	return (
		<StyledCalendar>
			<Calendar onChange={onSelectDate} />
		</StyledCalendar>
	);
}

export default IndexCalendar;
