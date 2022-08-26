import Calendar from 'react-calendar';

import useStore from '../../hooks/useStore';

import 'react-calendar/dist/Calendar.css';

import StyledCalendar from './styled';

function PlannerCalendar() {
	const handlePlannerDate = useStore(state => state.handlePlannerDate);
	return (
		<StyledCalendar>
			<Calendar onChange={handlePlannerDate} />
		</StyledCalendar>
	);
}

export default PlannerCalendar;
