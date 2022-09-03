import Link from 'next/link';
/*
import UnfilledBookmarkIcon from '../Buttons/BookmarkButton/unfilled';
import UnfilledCalendarIcon from '../Buttons/CalendarButton/unfilled'; */

import StyledNavbar from './styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">Home</Link>
			<Link href="/favorites">Favorites</Link>
			<Link href="/progress">Progress</Link>
			<Link href="/planner">Planner</Link>
		</StyledNavbar>
	);
}
