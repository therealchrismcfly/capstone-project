import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StyledCardInstruction from './styled';

describe('card instruction component', () => {
	it('should show instructions after clicking the button', async () => {
		render(<StyledCardInstruction />);

		const instructionText = screen.queryByText(/This is the instruction!/i);
		expect(instructionText).not.toBeInTheDocument();

		const button = screen.getByRole('button', {name: /show instructions/i});
		await userEvent.click(button);

		const instructionTextAfterClick = screen.queryByText(/This is the instruction!/i);
		expect(instructionTextAfterClick).toBeInTheDocument();
	});
});
