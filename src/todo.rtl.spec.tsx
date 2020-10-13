import React from 'react';
import { render } from '@testing-library/react';
import { Todo } from './todo';

describe("React Testing Library - The Todo item", () =>
{
	test("Test rendering the Todo item", () =>
	{
		const { getByText } = render(<Todo
			completed={false}
			description="Test Todo item"
			onClick={() => { /* */ }}
		/>);

		expect(getByText("Test Todo item")).not.toBeNull();
	});
});
