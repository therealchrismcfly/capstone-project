import styled from 'styled-components';

const StyledAddButton = styled.button`
	position: absolute;
	bottom: -28px;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background-color: var(--spoiledEgg);
	&:hover {
		border: 1.5px solid black;
	}
`;

export default StyledAddButton;
