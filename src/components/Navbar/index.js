import Link from 'next/link';

import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledHomeButton from '../Buttons/HomeButton/styled';

import StyledNavbar from './styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<StyledHomeButton>
				<Link href="/">Home</Link>
			</StyledHomeButton>
			<StyledCalendarButton>
				<Link href="/planner">Planner</Link>
			</StyledCalendarButton>
		</StyledNavbar>
	);
}
