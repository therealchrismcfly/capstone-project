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
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		width: 375px;
		height: 667px;
	}

	body {
		margin: 0;
		background-color: var(--lynxWhite);
		font-family: "Poppins",sans-serif;
	}

	:root {
		--lavender:#D1C3F3;
		--spoiledEgg:#E0FE2B;
		--lynxWhite:#f7f7f7;
		--plainWhite:#fff;
		--chromaphobicBlack:#292929;
	}

	.react-calendar {
 width: 330px;
 border-radius: 8px;
 background-color: #fff;
 box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
 color: #222;
 font-family: Poppins, sans-serif;
 line-height: 1.125em;
}
.react-calendar__navigation button {
	min-width: 44px;
	margin-top: 8px;
	background: none;
	color: var(--chromaphobicBlack);
 font-size: 16px;
}
.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
 background-color: #6f48eb;
 color: white;
}
.react-calendar__navigation button[disabled] {
 background-color: #f0f0f0;
}
abbr[title] {
 text-decoration: none;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
	border-radius: 6px;
 background: #f8f8fa;
 color: #6f48eb;
}
.react-calendar__tile--now {
	border-radius: 6px;
 background: var(--lavender);
 color: #6f48eb;
 font-weight: bold;
}
.react-calendar__tile--now:enabled:hover,
.react-calendar__tile--now:enabled:focus {
	border-radius: 6px;
 background: #6f48eb33;
 color: #6f48eb;
 font-weight: bold;
}
.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
 background: #f8f8fa;
}
.react-calendar__tile--active {
	border-radius: 6px;
 background: #6f48eb;
 color: white;
 font-weight: bold;
}
.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
 background: #6f48eb;
 color: white;
}
.react-calendar--selectRange .react-calendar__tile--hover {
 background-color: #f8f8fa;
}
.react-calendar__tile--range {
	border-radius: 0;
 background: #f8f8fa;
 color: #6f48eb;
}
.react-calendar__tile--rangeStart {
	border-top-left-radius: 6px;
 border-top-right-radius: 0;
 border-bottom-right-radius: 0;
 border-bottom-left-radius: 6px;
 background: #6f48eb;
 color: white;
}
.react-calendar__tile--rangeEnd {
 border-top-left-radius: 0;
 border-top-right-radius: 6px;
 border-bottom-right-radius: 6px;
 border-bottom-left-radius: 0;
 background: #6f48eb;
 color: white;
}

`;
