import Link from 'next/link';
import {useRouter} from 'next/router';

import Icon from '../Icons';

import StyledNavbar from './styled';

export default function Navbar() {
	const router = useRouter();
	return (
		<StyledNavbar>
			<Link href="/">
				<a>
					{router.pathname === '/' ? (
						<Icon variant="homeFilled" size="40px" color="var(--spoiledEgg)" />
					) : (
						<Icon variant="home" size="40px" color="var(--plainWhite)" />
					)}
				</a>
			</Link>
			<Link href="/favorites">
				<a>
					{router.pathname === '/favorites' ? (
						<Icon variant="bookmarkFilled" size="40px" color="var(--spoiledEgg)" />
					) : (
						<Icon variant="bookmark" size="40px" color="var(--plainWhite)" />
					)}
				</a>
			</Link>
			<Link href="/progress">
				<a>
					{router.pathname === '/progress' ? (
						<Icon variant="progress" size="40px" color="var(--spoiledEgg)" />
					) : (
						<Icon variant="progress" size="40px" color="var(--plainWhite)" />
					)}
				</a>
			</Link>
			<Link href="/planner">
				<a>
					{router.pathname === '/planner' ? (
						<Icon variant="calendar" size="40px" color="var(--spoiledEgg)" />
					) : (
						<Icon variant="calendar" size="40px" color="var(--plainWhite)" />
					)}
				</a>
			</Link>
		</StyledNavbar>
	);
}
