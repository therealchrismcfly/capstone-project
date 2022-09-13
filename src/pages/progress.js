import dynamic from 'next/dynamic';
import Head from 'next/head';

const CardlistProgress = dynamic(() => import('../components/CardLists/cardlistProgress.js'), {
	ssr: false,
});

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
