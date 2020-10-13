import React from 'react';
import { mount, configure } from 'enzyme';
import { Todo } from './todo';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Enzyme - The Todo item", () =>
{
	test("Test rendering the Todo item", () =>
	{
		const wrapper = mount(<Todo
			completed={false}
			description={"Test Todo item"}
			onClick={() => { /* */ }}
		/>);

		const desc = wrapper.find(".flexDescription");
		expect(desc.text()).toBe("Test Todo item");
	});
});
