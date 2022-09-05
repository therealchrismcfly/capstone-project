import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';
import StyledAddButton from '../Buttons/AddButton/styled';
import StyledExitButton from '../Buttons/ExitButton/styled';
import Icon from '../Icons';

import StyledCalendar from './StyledCalendarBox';

import 'react-calendar/dist/Calendar.css';

function IndexCalendar({exercise, onCalendarHide}) {
	const setExerciseDate = useStore(state => state.setExerciseDate);
	const addToPlanner = useStore(state => state.addToPlanner);
	return (
		<StyledCalendar>
			<Calendar
				next2Label={null}
				prev2Label={null}
				onChange={date_ => {
					setExerciseDate(exercise.id, date_);
				}}
				value={exercise.date}
			/>
			<StyledAddButton
				type="button"
				onClick={() => {
					addToPlanner(exercise.id);
					onCalendarHide();
				}}
			>
				+
			</StyledAddButton>
			<StyledExitButton
				onClick={() => {
					onCalendarHide();
				}}
			>
				<Icon variant="closeBox" size="20px" color="var(--chromaphobicBlack)" />
			</StyledExitButton>
		</StyledCalendar>
	);
}

export default IndexCalendar;
