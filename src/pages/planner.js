import Head from 'next/head';

import Layout from '../components/Layout';

export default function PlannerPage() {
	return (
		<Layout>
			<Head>
				<title key="title">My Project</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
		</Layout>
	);
}
