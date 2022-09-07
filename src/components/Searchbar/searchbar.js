import {search} from 'fast-fuzzy';
import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledHeader from '../Header/styled';
import Icon from '../Icons';
import StyledInputField from '../SearchInputField/styled';

import {StyledLabel, StyledWrapper} from './styled';

export default function Searchbar() {
	const [inputValue, setInputValue] = useState('');
	const setSuggestions = useStore(state => state.setSuggestions);
	const exerciseCards = useStore(state => state.exerciseCards);

	useEffect(() => {
		const results = search(inputValue, exerciseCards, {
			keySelector: exerciseCards => exerciseCards.name,
		});
		setSuggestions(results);
	}, [exerciseCards, inputValue, setSuggestions]);

	return (
		<StyledHeader>
			<StyledWrapper>
				<Icon variant="search" size="25px" color="#757575" />
				<StyledLabel hidden for="search">
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
	);
}
