import styled from 'styled-components';

const StyledCalendarContainerIndex = styled.div`
	display: flex;
	position: absolute;
	z-index: 10;
	top: 70px;
	right: 0;
	flex-direction: column;
	align-items: center;
`;

const StyledCalendarContainerPlanner = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
`;

export {StyledCalendarContainerIndex, StyledCalendarContainerPlanner};
