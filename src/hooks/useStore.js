import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	cards: [
		{id: nanoid(), name: 'Liegestütze', description: 'Lorem Ipsum', isChecked: false},
		{id: nanoid(), name: 'Planke', description: 'Lorem Ipsum', isChecked: false},
	],

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

	checkCard: id => {
		set(({cards}) => ({
			cards: cards.map(card => (card.id === id ? {...card, checked: !card.checked} : card)),
		}));
	},
}));

export default useStore;
