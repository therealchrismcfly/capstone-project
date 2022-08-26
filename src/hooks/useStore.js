import create from 'zustand';

const useStore = create(set => ({
	cards: [
		{
			id: 0,
			name: 'Squats',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isPlanned: false,
			isDone: false,
		},
		{
			id: 1,
			name: 'Biceps Curls',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isPlanned: false,
			isDone: false,
		},
		{
			id: 2,
			name: 'Shoulder Press',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isPlanned: false,
			isDone: false,
		},
	],

	changeSets: (id, sets) => {
		set(state => ({
			cards: state.cards.map(card => (card.id === id ? {...card, sets} : card)),
		}));
	},

	changeReps: (id, reps) => {
		set(state => ({
			cards: state.cards.map(card => (card.id === id ? {...card, reps} : card)),
		}));
	},

	changeWeight: (id, weight) => {
		set(state => ({
			cards: state.cards.map(card => (card.id === id ? {...card, weight} : card)),
		}));
	},

	deleteFromPlanner: id => {
		set(state => ({
			cards: state.cards.map(card => (card.id === id ? {...card, isPlanned: false} : card)),
		}));
	},

	addToPlanner: id => {
		set(state => ({
			cards: state.cards.map(card => (card.id === id ? {...card, isPlanned: true} : card)),
		}));
	},
	checkCard: id => {
		set(state => ({
			cards: state.cards.map(card =>
				card.id === id ? {...card, isDone: !card.isDone} : card
			),
		}));
	},
}));

export default useStore;
