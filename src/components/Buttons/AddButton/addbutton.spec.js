/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './styled';

describe('Button component', () => {
	it('should allow clicks', async () => {
		const handleClick = jest.fn();
		const text = 'add';
		render(<Button onClick={handleClick}>{text}</Button>);
		const button = screen.getByText(text);
		await userEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});
});
