import {nanoid} from 'nanoid';
import create from 'zustand';

const useStore = create(set => ({
	exerciseCards: [
		{
			id: 0,
			name: 'Squats',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			instruction: 'This is an instruction to do your exercise.',
			isBookmarked: false,
		},
		{
			id: 1,
			name: 'Biceps Curls',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			instruction: 'This is an instruction to do your exercise.',
			isBookmarked: false,
		},
		{
			id: 2,
			name: 'Shoulder Press',
			image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
			instruction: 'This is an instruction to do your exercise.',
			isBookmarked: false,
		},
	],

	workouts: [],

	changeSets: (id, sets) => {
		set(state => ({
			workouts: state.workouts.map(workout =>
				workout.id === id ? {...workout, sets} : workout
			),
		}));
	},

	changeReps: (id, reps) => {
		set(state => ({
			workouts: state.workouts.map(workout =>
				workout.id === id ? {...workout, reps} : workout
			),
		}));
	},

	changeWeight: (id, weight) => {
		set(state => ({
			workouts: state.workouts.map(workout =>
				workout.id === id ? {...workout, weight} : workout
			),
		}));
	},

	deleteWorkout: id => {
		set(state => {
			return {
				workouts: state.workouts.filter(workout => id !== workout.id),
			};
		});
	},

	addToPlanner: (date, name) => {
		set(state => {
			return {
				workouts: [
					...state.workouts,
					{id: nanoid(), date, name, sets: '0', reps: '0', weight: '0', isDone: false},
				],
			};
		});
	},

	checkCard: id => {
		set(state => ({
			workouts: state.workouts.map(workout =>
				workout.id === id ? {...workout, isDone: !workout.isDone} : workout
			),
		}));
	},

	handlePlannerDate: selectedDate => {
		set(() => ({
			plannedDate: selectedDate.toDateString(),
		}));
	},

	handleBookmark: id => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id
					? {...exerciseCard, isBookmarked: !exerciseCard.isBookmarked}
					: exerciseCard
			),
		}));
	},
}));

export default useStore;
