import styled, {keyframes} from 'styled-components';

const appear = keyframes`
0% {
	opacity: 0
}

25%{
	opacity: 1
}

50%{
	opacity: 0
}

75%{
	opacity: 1
}

100%{
	opacity: 0
}
`;

const StyledWelcomeText = styled.p`
	animation: ${appear} 7s infinite;
	opacity: 0;
	font-family: 'Poppins', sans-serif;
	font-size: 30px;
	font-style: bold;
	text-decoration: 8px underline var(--spoiledEgg);
`;

export default StyledWelcomeText;
