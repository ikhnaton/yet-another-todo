import React from 'react';
import ReactDOM from 'react-dom';
import { Todolist } from './todolist';

const App = () =>
{
	return (
		<div>
			<Todolist />
		</div>
	);
};

document.addEventListener("DOMContentLoaded", () =>
{
	ReactDOM.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
		document.getElementById("root")
	);
});
