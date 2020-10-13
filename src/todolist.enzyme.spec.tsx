import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Todolist } from './todolist';
import { act } from 'react-dom/test-utils';

describe("Enzyme - The Todolist item", () =>
{
	beforeAll(() =>
	{
		configure({ adapter: new Adapter() });
	});

	test("Test rendering the Todolist item", () =>
	{
		const todoItem1 = "Sample Todo Item";
		const todoItem2 = "Sample Todo Item 2";

		const wrapper = mount(<Todolist />);

		let todoItems = wrapper.find(".flexDescription");
		expect(todoItems.length).toBe(0);

		const desc = wrapper.find("#description");
		const button = wrapper.find("button");

		act(() =>
		{
			desc.props().onChange({ currentTarget: { value: todoItem1 } } as any);
		});
		button.simulate('click');

		act(() =>
		{
			desc.props().onChange({ currentTarget: { value: todoItem2 } } as any);
		});
		button.simulate('click');

		todoItems = wrapper.find(".flexDescription");
		expect(todoItems.length).toBe(2);
		expect(todoItems.at(0).text()).toBe(todoItem1);
		expect(todoItems.at(1).text()).toBe(todoItem2);
	});
});
