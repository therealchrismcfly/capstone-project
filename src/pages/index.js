import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {useState, useEffect} from 'react';

import StyledWelcomeButton from '../components/Buttons/WelcomeButton/styled';
import StyledWelcomePage from '../components/WelcomePage/styled';
import StyledWelcomeText from '../components/WelcomeText/styled';

export default function HomePage() {
	const [slogan, setSlogan] = useState("DON'T YOU KNOW?");

	useEffect(() => {
		function handleSlogan() {
			setSlogan("YOU'VE GOT TO");
		}
		const timeOutID = setTimeout(handleSlogan, 3000);

		return () => {
			clearTimeout(timeOutID);
		};
	}, []);
	return (
		<>
			<Head>
				<title key="title">Pump it UP</title>
				<meta key="description" name="description" content="This is my project" />
			</Head>
			<StyledWelcomePage>
				<StyledWelcomeText>{slogan}</StyledWelcomeText>
				<Image src="/pictures/Logo.png" alt="logo" width={230} height={230} />
				<Link href="/home">
					<StyledWelcomeButton>START YOUR WORKOUT</StyledWelcomeButton>
				</Link>
			</StyledWelcomePage>
		</>
	);
}
