import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import 'react-calendar/dist/Calendar.css';

function PlannerCalendar() {
	const handlePlannerDate = useStore(state => state.handlePlannerDate);
	return <Calendar onChange={handlePlannerDate} />;
}

export default PlannerCalendar;
