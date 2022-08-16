import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledSearchButton from '../Buttons/Search Button/styled';

import StyledNavbar from './styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<StyledSearchButton>Search</StyledSearchButton>
			<StyledCalendarButton>Calendar</StyledCalendarButton>
		</StyledNavbar>
	);
}
