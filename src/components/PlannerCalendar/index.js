import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';
import {StyledCalendarContainerPlanner} from '../StyledCalendarContainer/styled';

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
