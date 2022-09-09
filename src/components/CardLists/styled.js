import styled from 'styled-components';

const StyledCardlist = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 90px 0 55px 0;
	padding-left: 0;
`;
const StyledCardlistPlanner = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin: 55px 0;
	padding-left: 0;
`;

const StyledCardlistProgress = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	margin-top: 60px;
	margin-bottom: 60px;
	padding-left: 0;
`;

export {StyledCardlistPlanner, StyledCardlist, StyledCardlistProgress};
