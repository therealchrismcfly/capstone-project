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
				cards: [...state.cards, {id: nanoid(), name, image, description, checked: false}],
			};
		});
	},

	checkCard: id => {
		set(({cards}) => ({
			cards: cards.map(card => (card.id === id ? {...card, checked: !card.checked} : card)),
		}));
	},

	setsEntries: [],
	addSetentry: name => {
		set(() => {
			return {setsEntries: [{name, id: nanoid()}]};
		});
	},

	repsEntries: [],
	addRepentry: name => {
		set(() => {
			return {repsEntries: [{name, id: nanoid()}]};
		});
	},
}));

export default useStore;
