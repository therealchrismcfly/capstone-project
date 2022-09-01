import {useState} from 'react';

import StyledCardHeadline from '../CardHeadline/styled';

import StyledProgressHistoryCard from './styledProgressHistoryCard';
import StyledProgressHistoryCardName from './styledProgressHistoryCardName';

export default function ProgressHistoryCard({workout}) {
	const [isHistoryVisible, setIsHistoryVisible] = useState(false);
	return (
		<>
			<StyledProgressHistoryCardName>
				<StyledCardHeadline>{workout.name}</StyledCardHeadline>
			</StyledProgressHistoryCardName>{' '}
			<button
				type="button"
				onClick={() => {
					setIsHistoryVisible(!isHistoryVisible);
				}}
			>
				{isHistoryVisible ? 'Hide' : 'Show'}
			</button>
			{isHistoryVisible && (
				<StyledProgressHistoryCard>
					<p>Sets</p>
					<p>Reps</p>
					<p>Weight</p>
				</StyledProgressHistoryCard>
			)}
		</>
	);
}
