import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* poppins-regular */
	@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 400;
		src: url('../public/fonts/poppins-v20-latin-regular.eot');
		src: local(''),
       url('../public/fonts/poppins-v20-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../public/fonts/poppins-v20-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../public/fonts/poppins-v20-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../public/fonts/poppins-v20-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../public/fonts/poppins-v20-latin-regular.svg#Poppins') format('svg'); /* Legacy iOS */
}

/* poppins-700 */
@font-face {
		font-family: 'Poppins';
		font-style: normal;
		font-weight: 700;
		src: url('../public/fonts/poppins-v20-latin-700.eot');
		src: local(''),
       url('../public/fonts/poppins-v20-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../public/fonts/poppins-v20-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('../public/fonts/poppins-v20-latin-700.woff') format('woff'), /* Modern Browsers */
       url('../public/fonts/poppins-v20-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../public/fonts/poppins-v20-latin-700.svg#Poppins') format('svg'); /* Legacy iOS */
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
		font-size: 1rem;
	}



`;
