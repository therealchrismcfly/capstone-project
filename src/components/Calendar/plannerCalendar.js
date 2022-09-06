import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import 'react-calendar/dist/Calendar.css';

import StyledCalendarContainerPlanner from './StyledCalendarContainerPlanner';

function PlannerCalendar() {
	const handlePlannerDate = useStore(state => state.handlePlannerDate);
	const plannedDate = useStore(state => state.plannedDate);
	return (
		<StyledCalendarContainerPlanner>
			<Calendar
				next2Label={null}
				prev2Label={null}
				onChange={handlePlannerDate}
				value={plannedDate}
			/>
		</StyledCalendarContainerPlanner>
	);
}

export default PlannerCalendar;
