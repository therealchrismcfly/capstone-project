import dynamic from 'next/dynamic';
import Head from 'next/head';

const CardlistPlanner = dynamic(() => import('../components/CardLists/cardlistPlanner.js'), {
	ssr: false,
});

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
