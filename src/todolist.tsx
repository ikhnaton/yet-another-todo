import React, { FunctionComponent, useState } from "react";
import { Todo } from "./todo";
// import styles from "./todolist.module.scss";

export type TodoItem = {
	completed: boolean,
	description: string
};

export const Todolist:FunctionComponent = () =>
{
	const [description, setDescription] = useState<string>("");
	const [todos, setTodos] = useState<TodoItem[]>([]);

	const addItem = (item: TodoItem) =>
	{
		setTodos([...todos, item]);
	};

	const setStatus = (index: number, completed: boolean) =>
	{
		const newTodos: TodoItem[] = todos.map((item, tindex) =>
		{
			return index === tindex ? { completed, description: item.description } : item;
		});

		setTodos(newTodos);
	};

	return (
		<div>
			<h1>Super Simple Todo List</h1>
			<form>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					id="description"
					value={description}
					onChange={(event) => setDescription(event.currentTarget.value)}/>
				<button onClick={(event) =>
				{
					event.preventDefault();
					addItem({ completed: false, description });
					setDescription("");
				}} >Click to Add</button>
			</form>
			<div>
				{ todos.map((item, indexT) =>
					<Todo { ...item } key={indexT} onClick={() => setStatus(indexT, !item.completed)} />)
				}
			</div>
		</div>
	);
};
