import dynamic from 'next/dynamic';
import Head from 'next/head';

const CardlistHome = dynamic(() => import('../components/CardLists/cardlistHome.js'), {
	ssr: false,
});

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
