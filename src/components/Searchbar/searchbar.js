import {search} from 'fast-fuzzy';
import {useEffect} from 'react';
import {useState} from 'react';

import useStore from '../../hooks/useStore';
import StyledInputField from '../SearchInputField/styled';

import StyledSearchBar from './styled';

export default function SearchBar() {
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
		<StyledSearchBar>
			<label htmlFor="inputName">
				<StyledInputField
					type="text"
					id="inputName"
					placeholder="Search for an exercise!"
					required
					value={inputValue}
					onChange={event => {
						setInputValue(event.target.value);
					}}
				></StyledInputField>
			</label>
		</StyledSearchBar>
	);
}
