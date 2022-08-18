import Link from 'next/link';

import StyledNavbar from './styled';

export default function Navbar() {
	return (
		<StyledNavbar>
			<Link href="/">Home</Link>

			<Link href="/planner">Planner</Link>
		</StyledNavbar>
	);
}
