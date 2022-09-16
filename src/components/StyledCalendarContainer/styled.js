import styled from 'styled-components';

const StyledCalendarContainerHome = styled.div`
	display: flex;
	position: absolute;
	z-index: 10;
	top: 60px;
	right: 0;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledCalendarContainerPlanner = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 90px;
`;

export {StyledCalendarContainerHome, StyledCalendarContainerPlanner};
