import {search} from 'fast-fuzzy';
import {useEffect, useState} from 'react';

import useStore from '../../hooks/useStore';
import Icon from '../Icons';
import StyledHeader from '../StyledHeader/styled';
import {StyledLabel, StyledWrapper, StyledInputField} from '../StyledSearchbar/styled';

function Searchbar() {
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
	);
}

export default Searchbar;
