import dynamic from 'next/dynamic';
import Head from 'next/head';

const TheCalendar = dynamic(() => import('../components/Calendar/calendar'), {
	ssr: false,
});

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
