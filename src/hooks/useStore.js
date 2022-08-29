import create from 'zustand';

const useStore = create(set => ({
	exerciseCards: [
		{
			id: 0,
			name: 'Squats',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isDone: false,
			isBookmarked: false,
			isPlanned: false,
			date: [],
		},
		{
			id: 1,
			name: 'Biceps Curls',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isDone: false,
			isBookmarked: false,
			isPlanned: false,
			date: [],
		},
		{
			id: 2,
			name: 'Shoulder Press',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			description: 'This is an instruction to do your exercise.',
			sets: 0,
			reps: 0,
			weight: 0,
			isDone: false,
			isBookmarked: false,
			isPlanned: false,
			date: [],
		},
	],

	changeSets: (id, sets) => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, sets} : exerciseCard
			),
		}));
	},

	changeReps: (id, reps) => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, reps} : exerciseCard
			),
		}));
	},

	changeWeight: (id, weight) => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, weight} : exerciseCard
			),
		}));
	},

	deleteFromPlanner: id => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, isPlanned: false} : exerciseCard
			),
		}));
	},

	addToPlanner: (id, date) => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id
					? {...exerciseCard, isPlanned: true, date: [...exerciseCard.date, date]}
					: exerciseCard
			),
		}));
	},

	checkCard: id => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id
					? {...exerciseCard, isDone: !exerciseCard.isDone}
					: exerciseCard
			),
		}));
	},

	handlePlannerDate: selectedDate => {
		set(() => ({
			plannedDate: selectedDate.toDateString(),
		}));
	},

	bookmarked: id => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, isBookmarked: true} : exerciseCard
			),
		}));
	},

	debookmark: id => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, isBookmarked: false} : exerciseCard
			),
		}));
	},
}));

export default useStore;
