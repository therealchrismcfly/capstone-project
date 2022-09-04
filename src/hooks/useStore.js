import {nanoid} from 'nanoid';
import create from 'zustand';
const exerciseCards = [
	{
		id: 0,
		name: 'Biceps Curl',
		image: '/pictures/bicepsCurls.jpeg',
		instruction:
			'Hold a dumbbell in each hand and stand with your feet as wide apart as your hips. Pull your abdominals in, stand tall, and keep your knees slightly bent. Curl both arms upward until they are in front of your shoulders. Slowly lower the dumbbells back down. ',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 1,
		name: 'Shoulder Press',
		image: '/pictures/shoulderPress.jpeg',
		instruction:
			'Hold a dumbbell in each hand. Bend your elbows and raise your upper arms to shoulder height so the dumbbells are at ear level. Push the dumbbells up and in until the ends of the dumbbells touch lightly, directly over your head, and then lower the dumbbells back to ear level.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 2,
		name: 'Deadlifts',
		image: '/pictures/deadlifts.jpeg',
		instruction:
			'Stand with your mid-foot under the barbell. Bend over and grab the bar with a shoulder-width grip. Bend your knees until your shins touch the bar. Lift your chest up and straighten your lower back.Take a big breath, hold it, and stand up with the weight.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 3,
		name: 'Triceps Curl',
		image: '/pictures/tricepsCurls.jpeg',
		instruction:
			'Sit down on the bench and grab a dumbbell. Raise your arms and, with your elbows pointing forward, start lowering the dumbbell. Slowly raise the dumbbell to the starting position and squeeze the triceps.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 4,
		name: 'Russian Twist',
		image: '/pictures/russianTwist.jpeg',
		instruction:
			'Lie down with your legs bent at the knees. Elevate your upper body so that it creates a V shape with your thighs. Twist your torso to the right, and then reverse the motion, twisting it to the left. Repeat this movement until the set is complete.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 5,
		name: 'Bench Press',
		image: '/pictures/benchPress.jpeg',
		instruction:
			'Lie on the bench with your eyes under the bar. Grab the bar with a medium grip-width (thumbs around the bar!). Unrack the bar by straightening your arms. Lower the bar to your mid-chest. Press the bar back up until your arms are straight.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 6,
		name: 'Crunches',
		image: '/pictures/crunches.jpeg',
		instruction:
			'Lie down on the mat, keep your knees bent, your back and feet flat, and your hands supporting your head. Lift your shoulders, squeeze your abdominal muscles and hold for 1 to 2 seconds. Slowly return to the starting position and repeat until set is complete.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 7,
		name: 'Squats',
		image: '/pictures/squats.jpeg',
		instruction:
			'Safely load the barbell onto your traps and shoulders. Stand with your feet shoulder-width apart, toes slightly out, core braced, and chest up. Initiate a basic squat movement — hips back, knees bent, ensuring they fall out, not in. Pause when your thighs reach about parallel to the ground. Push through your entire foot to return to start.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 8,
		name: 'Calf Raises',
		image: '/pictures/calfRaises.jpeg',
		instruction:
			'Hold a dumbbell in each hand. Stand with your torso upright, your feet hip-width apart, and your toes pointing forward. Raise your heels off the floor and squeeze your calves. Return to the starting position, by slowly lowering your heels, and repeat.',
		isBookmarked: false,
		date: new Date(),
	},
	{
		id: 9,
		name: 'Barbell Row',
		image: '/pictures/row.jpeg',
		instruction:
			'Stand with your mid-foot under the bar (medium stance). Bend over and grab the bar (palms down, medium-grip). Unlock your knees while keeping your hips high. Lift your chest and straighten your back. Pull the bar against your lower chest.',
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
