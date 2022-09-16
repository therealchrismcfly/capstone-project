import Head from 'next/head';

import CardlistFavorites from '../components/CardlistFavorites/index.js';
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
