import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	cards: [],

	deleteCard: id => {
		set(state => {
			return {
				cards: state.cards.filter(card => card.id !== id),
			};
		});
	},

	addCard: (name, image, description) => {
		set(state => {
			return {
				cards: [...state.cards, {id: nanoid(), name, image, description}],
			};
		});
	},
}));

export default useStore;
