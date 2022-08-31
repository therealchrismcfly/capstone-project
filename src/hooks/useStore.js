import {nanoid} from 'nanoid';
import create from 'zustand';
const exerciseCards = [
	{
		id: 0,
		name: 'Squats',
		image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 1,
		name: 'Biceps Curls',
		image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 2,
		name: 'Shoulder Press',
		image: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
];
const useStore = create(set => ({
	exerciseCards,
	setExerciseDate: (id, date) => {
		set(state => ({
			exerciseCards: state.exerciseCards.map(exerciseCard =>
				exerciseCard.id === id ? {...exerciseCard, date} : exerciseCard
			),
		}));
	},

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

	addToPlanner: id => {
		set(state => {
			return {
				workouts: [
					...state.workouts,
					{
						...state.exerciseCards.find(exerciseCard => exerciseCard.id === id),
						id: nanoid(),
					},
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

	plannedDate: new Date(),
	handlePlannerDate: selectedDate => {
		set(() => ({
			plannedDate: selectedDate,
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
