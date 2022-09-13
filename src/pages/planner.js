import Head from 'next/head';

import CardlistPlanner from '../components/CardLists/cardlistPlanner.js';
import Layout from '../components/Layout';

export default function PlannerPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Pump it UP</title>
				<meta key="description" name="description" content="capstone project" />
			</Head>
			<CardlistPlanner />
		</Layout>
	);
}
