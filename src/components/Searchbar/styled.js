import styled from 'styled-components';

const StyledWrapper = styled.div`
	display: flex;
	display: grid;
	grid-template-columns: 1.5rem 4fr;
	align-items: center;
	width: 66.6%;
	padding-left: 15px;
	overflow: hidden;
	border-radius: 25px;
	background-color: var(--plainWhite);
`;

const StyledLabel = styled.label`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0 0 0 0);
	border: 0;
`;

export {StyledWrapper, StyledLabel};
