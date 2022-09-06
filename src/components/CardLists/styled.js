import styled from 'styled-components';

const StyledCardlist = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 100px;
	padding-left: 0;
`;
const StyledCardlistPlanner = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 35px;
	padding-left: 0;
`;

const StyledCardlistProgress = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 70px;
	padding-left: 0;
`;

export {StyledCardlistPlanner, StyledCardlist, StyledCardlistProgress};
