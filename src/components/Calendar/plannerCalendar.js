import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import 'react-calendar/dist/Calendar.css';

function PlannerCalendar() {
	const handlePlannerDate = useStore(state => state.handlePlannerDate);
	const plannedDate = useStore(state => state.plannedDate);
	return <Calendar onChange={handlePlannerDate} value={plannedDate} />;
}

export default PlannerCalendar;
