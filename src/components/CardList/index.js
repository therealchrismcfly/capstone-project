import {EXERCISES} from '../../../backend/db';
import StyledHeadline from '../CardHeadline/styled';
import StyledCard from '../CardHeadline/styled';

import StyledCardlist from './styled';

export default function Cardlist() {
	return (
		<StyledCardlist>
			{EXERCISES.map(exercise => {
				return (
					<StyledCard key={exercise.id}>
						<StyledHeadline>{exercise.name}</StyledHeadline>
					</StyledCard>
				);
			})}
		</StyledCardlist>
	);
}
