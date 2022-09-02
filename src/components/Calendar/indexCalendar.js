import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import StyledCalendar from './StyledCalendarBox';

import 'react-calendar/dist/Calendar.css';

function IndexCalendar({exercise}) {
	const setExerciseDate = useStore(state => state.setExerciseDate);
	return (
		<StyledCalendar>
			<Calendar
				onChange={date_ => {
					setExerciseDate(exercise.id, date_);
				}}
				value={exercise.date}
			/>
		</StyledCalendar>
	);
}

export default IndexCalendar;
