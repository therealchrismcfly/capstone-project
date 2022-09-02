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
		font-size: 16px;
	}

	body {
		width: 375px;
		height: 667px;
		margin: 0;
		background-color: var(--lynxWhite);
		font-family: "Poppins",sans-serif;
		font-size: 1rem;
	}

	:root {
		--lavender:#D1C3F3;
		--spoiledEgg:#E0FE2B;
		--lynxWhite:#f7f7f7;
		--plainWhite:#fff;
		--chromaphobicBlack:#292929;
	}


`;
