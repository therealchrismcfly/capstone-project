/* import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import StyledCardInstruction from '../../CardInstruction/styled';

import StyledShowButton from './styled';

describe('ShowButton component', () => {
	it('should show instructions after clicking the button', async () => {
		render(<StyledCardInstruction />);

		const button = screen.getByRole('button', {name: /show instructions/i});
		await userEvent.click(button);

		const instructionTextAfterClick = screen.queryByText(/This is the instruction!/i);
		expect(instructionTextAfterClick).toBeInTheDocument();
	});
});
 */
