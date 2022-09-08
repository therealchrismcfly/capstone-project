import Head from 'next/head';

import CardlistHome from '../components/CardLists/cardlistHome';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>

			<CardlistHome />
		</Layout>
	);
}
