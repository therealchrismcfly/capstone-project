import {search} from 'fast-fuzzy';
import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import IndexCard from '../Cards/indexCard';
import StyledHeader from '../Header/styled';
import Icon from '../Icons';
import {StyledLabel, StyledWrapper} from '../Searchbar/styled';
import StyledInputField from '../SearchInputField/styled';

import {StyledCardlist} from './styled';

function CardlistIndex() {
	const suggestions = useStore(state => state.suggestions);
	const exerciseCards = useStore(state => state.exerciseCards);

	/*Grenze*/

	const [inputValue, setInputValue] = useState('');
	const setSuggestions = useStore(state => state.setSuggestions);

	useEffect(() => {
		const results = search(inputValue, exerciseCards, {
			keySelector: exerciseCards => exerciseCards.name,
		});
		setSuggestions(results);
	}, [exerciseCards, inputValue, setSuggestions]);

	return (
		<>
			<StyledHeader>
				<StyledWrapper>
					<Icon variant="search" size="25px" color="#757575" />
					<StyledLabel hidden htmlFor="search">
						Search:
					</StyledLabel>
					<StyledInputField
						type="text"
						id="search"
						placeholder="Search for an exercise"
						required
						value={inputValue}
						onChange={event => {
							setInputValue(event.target.value);
						}}
					/>
				</StyledWrapper>
			</StyledHeader>
			{/*Grenze*/}

			<StyledCardlist>
				{suggestions.length
					? suggestions.map(exerciseCard => {
							return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })
					: exerciseCards.map(exerciseCard => {
							return <IndexCard key={exerciseCard.id} exerciseCard={exerciseCard} />;
					  })}
			</StyledCardlist>
		</>
	);
}

export default CardlistIndex;
