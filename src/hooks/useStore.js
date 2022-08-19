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
				cards: [...state.cards, {id: nanoid(), name, image, description, isChecked: false}],
			};
		});
	},

	checkCard: id => {
		set(state => {
			return {
				cards: state.cards.map(card =>
					card.id === id ? {...card, isChecked: !card.isChecked} : card
				),
			};
		});
	},
}));

export default useStore;
