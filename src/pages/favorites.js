import dynamic from 'next/dynamic';
import Head from 'next/head';

const CardlistFavorites = dynamic(() => import('../components/CardLists/cardlistFavorites.js'), {
	ssr: false,
});

import Layout from '../components/Layout';

export default function FavoritesPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Pump it UP</title>
				<meta key="description" name="description" content="capstone project" />
			</Head>
			<CardlistFavorites />
		</Layout>
	);
}
