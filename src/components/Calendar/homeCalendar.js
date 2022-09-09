import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';
import StyledAddButton from '../Buttons/AddButton/styled';

import {StyledCalendarContainerHome} from './StyledCalendarContainer';

function HomeCalendar({exercise, onCalendarHide}) {
	const setExerciseDate = useStore(state => state.setExerciseDate);
	const addToPlanner = useStore(state => state.addToPlanner);
	return (
		<StyledCalendarContainerHome>
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
		</StyledCalendarContainerHome>
	);
}

export default HomeCalendar;
