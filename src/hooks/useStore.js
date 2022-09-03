import {nanoid} from 'nanoid';
import create from 'zustand';
const exerciseCards = [
	{
		id: 0,
		name: 'Biceps Curl',
		image: '/pictures/bicepsCurls.jpeg',
		instruction: 'This is an instruction to do your exercise. ',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 1,
		name: 'Shoulder Press',
		image: '/pictures/shoulderPress.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 2,
		name: 'Deadlifts',
		image: '/pictures/deadlifts.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 3,
		name: 'Triceps Curl',
		image: '/pictures/tricepsCurls.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 4,
		name: 'Russian Twist',
		image: '/pictures/russianTwist.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 5,
		name: 'Bench Press',
		image: '/pictures/benchPress.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 6,
		name: 'Crunches',
		image: '/pictures/crunches.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 7,
		name: 'Squats',
		image: '/pictures/squats.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 8,
		name: 'Calf Raises',
		image: '/pictures/calfRaises.jpeg',
		instruction: 'This is an instruction to do your exercise.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 9,
		name: 'Barbell Row',
		image: '/pictures/row.jpeg',
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
						isDone: false,
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
	suggestions: [],
	setSuggestions: cards => {
		set({suggestions: cards});
	},
}));

export default useStore;
