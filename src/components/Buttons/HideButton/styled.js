import styled from 'styled-components';

const StyledHideButton = styled.button`
	padding: 12px 15px;
	border: none;
	border-radius: 20px;
	background-color: var(--spoiledEgg);
	font-size: 14px;
	&:hover {
		border: 2px solid var(--chromaphobicBlack);
	}
`;

export default StyledHideButton;
