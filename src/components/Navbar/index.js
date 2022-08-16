import Link from 'next/link';

import StyledCalendarButton from '../Buttons/CalendarButton/styled';
import StyledSearchButton from '../Buttons/Search Button/styled';

import StyledNavbar from './styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<StyledSearchButton>
				<Link href="/">Home</Link>
			</StyledSearchButton>
			<StyledCalendarButton>
				<Link href="/planner">Planner</Link>
			</StyledCalendarButton>
		</StyledNavbar>
	);
}
