import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';
import StyledAddButton from '../Buttons/AddButton/styled';

import StyledCalendarContainerIndex from './StyledCalendarContainer';

function IndexCalendar({exercise, onCalendarHide}) {
	const setExerciseDate = useStore(state => state.setExerciseDate);
	const addToPlanner = useStore(state => state.addToPlanner);
	return (
		<StyledCalendarContainerIndex>
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
		</StyledCalendarContainerIndex>
	);
}

export default IndexCalendar;
