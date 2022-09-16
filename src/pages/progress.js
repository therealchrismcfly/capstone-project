import Head from 'next/head';

import CardlistProgress from '../components/CardlistProgress/index.js';
import Layout from '../components/Layout';

export default function ProgressPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Pump it UP</title>
				<meta key="description" name="description" content="capstone project" />
			</Head>
			<CardlistProgress />
		</Layout>
	);
}
