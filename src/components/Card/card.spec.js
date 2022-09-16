/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';

import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from './index';

describe('card instruction component', () => {
	it('should show instructions after clicking the button', async () => {
		const exerciseCard = {
			id: 0,
			name: 'Deadlifts',
			image: '/pictures/Deadlifts.jpeg',
			instruction: 'This is the instruction!',
			isBookmarked: false,
			date: new Date(),
		};
		render(<Card exerciseCard={exerciseCard} />);

		const instructionText = screen.queryByText(/This is the instruction!/i);
		expect(instructionText).not.toBeInTheDocument();

		const button = screen.getByRole('button', {name: /show instruction/i});
		await userEvent.click(button);

		const instructionTextAfterClick = screen.queryByText(/This is the instruction!/i);
		expect(instructionTextAfterClick).toBeInTheDocument();
	});
});
