import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Todolist } from './todolist';

describe("React Testing Library - The Todolist item", () =>
{
	test("Test rendering the Todolist item", () =>
	{
		const todoItem1 = "Sample Todo Item";
		const todoItem2 = "Sample Todo Item 2";

		const { getByLabelText, getByText, container } = render(<Todolist />);

		const input = getByLabelText("Description");
		const button = getByText("Click to Add");

		fireEvent.change(input, { target: { value: todoItem1 } });
		fireEvent.click(button);

		fireEvent.change(input, { target: { value: todoItem2 } });
		fireEvent.click(button);

		expect(container.innerHTML).toMatchSnapshot();
	});
});
