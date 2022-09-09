import styled from 'styled-components';

const StyledProgressHistoryItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	list-style: none;
`;

const StyledProgressHistoryName = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 15px;
	background-color: var(--lavender);
	box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
`;

const StyledProgressHistoryTable = styled.table`
	width: 100%;
	height: 100%;
	padding: 15px;
	background-color: var(--plainWhite);
	box-shadow: 0 4px 40px rgba(0, 0, 0, 0.25);
	font-size: 14px;
`;
export {StyledProgressHistoryItem, StyledProgressHistoryName, StyledProgressHistoryTable};
