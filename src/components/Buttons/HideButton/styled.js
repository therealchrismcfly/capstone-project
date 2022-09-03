import styled from 'styled-components';

const StyledHideButton = styled.button`
	padding: 12px 15px;
	border: 1.5px solid black;
	border-radius: 20px;
	background-color: var(--plainWhite);
	font-size: 14px;
	&:hover {
		background-color: var(--spoiledEgg);
	}
`;

export default StyledHideButton;
