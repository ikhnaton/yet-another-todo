import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Todolist } from './todolist';

describe("React Testing Library - The Todolist item", () =>
{
	test("Test rendering the Todolist item", () =>
	{
		const todoItem1 = "Sample Todo Item";
		const todoItem2 = "Sample Todo Item 2";

		const { getByLabelText, getByText, queryByText, container } = render(<Todolist />);

		expect(queryByText(todoItem1)).toBeNull();
		expect(queryByText(todoItem2)).toBeNull();

		const input = getByLabelText("Description");
		const button = getByText("Click to Add");

		fireEvent.change(input, { target: { value: todoItem1 } });
		fireEvent.keyUp(input, { key: "Enter", keyCode: 13 });

		fireEvent.change(input, { target: { value: todoItem2 } });
		fireEvent.click(button);

		const todo1 = queryByText(todoItem1);
		expect(todo1).not.toBeNull();
		expect(queryByText(todoItem2)).not.toBeNull();

		fireEvent.click(todo1);
		expect(queryByText("Y")).not.toBeNull();
	});
});
