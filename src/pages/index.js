import Head from 'next/head';

import TheCalendar from '../components/Calendar/calendar';
import CardlistIndex from '../components/CardLists/index';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<TheCalendar />
			<CardlistIndex />
		</Layout>
	);
}
