import Head from 'next/head';

import CardlistHome from '../components/CardLists/cardlistHome.js';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Pump it UP</title>
				<meta key="description" name="description" content="capstone project" />
			</Head>

			<CardlistHome />
		</Layout>
	);
}
