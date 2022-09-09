import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* poppins-regular */
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		src: url('/fonts/poppins-v20-latin-regular.eot');
		src: local(''),
       url('/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}

/* poppins-700 */
@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		src: url('/fonts/poppins-v20-latin-700.eot');
		src: local(''),
       url('/fonts/poppins-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/poppins-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/poppins-v20-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/poppins-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/poppins-v20-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
}


	*,
	*::after {
		box-sizing: border-box;
	}


	body {
		margin: 0;
		background-color: var(--lynxWhite);
		color: var(--chromaphobicBlack);
		font-family: "Poppins",sans-serif;
	}

	:root {
		--lavender:#c3b6f3;
		--darkLavender: #6a49e3;
		--spoiledEgg:#E0FE2B;
		--lynxWhite:#f7f7f7;
		--plainWhite:#fff;
		--chromaphobicBlack:#282828;
	}

	.react-calendar {
  width: 330px;
  max-width: 100%;
  padding-top: 5px;
  padding-bottom: 15px;
  background: var(--plainWhite);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  color: var(--chromaphobicBlack);
  font-family: Poppins, sans-serif;
 }
.react-calendar--doubleView {
  width: 700px;
}
.react-calendar--doubleView .react-calendar__viewContainer {
  display: flex;
  margin: -0.5em;
}
.react-calendar--doubleView .react-calendar__viewContainer > * {
  width: 50%;
  margin: 0.5em;
}
.react-calendar *,
.react-calendar,
.react-calendar *:before,
.react-calendar *:after {
  box-sizing: border-box;
}
.react-calendar button {
  margin: 0;
  border: 0;
  outline: none;
}
.react-calendar__navigation button {
	min-width: 44px;
 background: none;
	color: var(--chromaphobicBlack);
 font-size: 18px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 color: var(--darkLavender)
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
.react-calendar button:enabled:hover {
  cursor: pointer;
}
.react-calendar__navigation {
  display: flex;
  height: 50px;
}

.react-calendar__month-view__weekdays {
	font-size: 14px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
}

abbr[title] {
 text-decoration: none;
}

.react-calendar__month-view__weekdays__weekday {
  padding: 0.5em;
}

.react-calendar__tile {
  max-width: 100%;
  padding: 10px 6.6667px;
  background: none;
  line-height: 18px;
  text-align: center;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75em;
  font-weight: bold;
}
.react-calendar__month-view__days__day--weekend {
  color: var(--chromaphobicBlack);
}
.react-calendar__month-view__days__day--neighboringMonth {
  color: #757575;
}



.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
  padding: 2em 0.5em;
}

.react-calendar__tile:disabled {
  background-color: #f0f0f0;
}
.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
  background: var(--darkLavender);
  color:white;
  font-style: bold;
}
.react-calendar__tile--now {
  background: var(--lavender);
  color: var(--plainWhite);
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
  background: var(--lavender);
  color: var(--plainWhite);

}
.react-calendar__tile--hasActive {
  background: var(--darkLavender);
  color: var(--plainWhite);
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
  background: var(--darkLavender);
  color: white;
  font-style: bold;
}
.react-calendar__tile--active {
  background: var(--darkLavender);
  color: white;
  font-style: bold;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
  background: var(--darkLavender);
}
.react-calendar--selectRange .react-calendar__tile--hover {
  background: var(--darkLavender);
}


`;
