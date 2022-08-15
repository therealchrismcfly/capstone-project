import {exercises} from '../../../backend/db';
import StyledCard from '../Card/styled';
import StyledHeadline from '../CardHeadline/styled';

import StyledCardlist from './styled';

export default function Cardlist() {
	return (
		<StyledCardlist>
			{exercises.map(exercise => {
				return (
					<StyledCard key={exercise.id}>
						<StyledHeadline>{exercise.name}</StyledHeadline>
					</StyledCard>
				);
			})}
		</StyledCardlist>
	);
}
