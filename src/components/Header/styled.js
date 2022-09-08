import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	position: fixed;
	z-index: 20;
	top: 0;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 70px;
	background-color: var(--chromaphobicBlack);
	color: var(--plainWhite);
	font-size: 12px;
`;

export default StyledHeader;
