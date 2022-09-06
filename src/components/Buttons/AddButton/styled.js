import styled from 'styled-components';

const StyledAddButton = styled.button`
	position: absolute;
	bottom: -28px;
	width: 40px;
	height: 40px;
	border: none;
	border-radius: 50%;
	background-color: #6f48eb;
	color: white;
	font-size: 20px;
	&:hover {
		border: 2px solid var(--chromaphobicBlack);
	}
`;

export default StyledAddButton;
