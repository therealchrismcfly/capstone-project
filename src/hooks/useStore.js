import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	cards: [],
	addCard: name => {
		set(state => {
			return {
				cards: [...state.cards, {id: nanoid(), name}],
			};
		});
	},
}));

export default useStore;
