import styled from 'styled-components';

const StyledCardHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 70px;
	border-radius: 25px 25px 0 0;
	background-color: var(--lavender);
`;

const StyledCardHeaderIconContainer = styled.div`
	margin-right: 25px;
`;

export {StyledCardHeader, StyledCardHeaderIconContainer};
