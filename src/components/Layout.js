import Navbar from './Navbar/index';

export default function Layout({children}) {
	return (
		<>
			<main>{children}</main>
			<Navbar />
		</>
	);
}
