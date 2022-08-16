import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar/index';

export default function Layout({children}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Navbar />
			<Footer />
		</>
	);
}
