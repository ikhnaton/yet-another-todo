import React, { FunctionComponent } from "react";
import { TodoItem } from "./todolist";
import styles from "./todo.module.scss";

export type TodoItemProps = TodoItem & {
	onClick: Function
}
export const Todo:FunctionComponent<TodoItemProps> = ({ description, completed, onClick }) =>
{
	return (
		<div className={styles.flex}>
			<div onClick={(event) => onClick(event)} className={styles.flexStatus}>{completed === true ? "Y" : "N" }</div>
			<div onClick={(event) => onClick(event)} className={styles.flexDescription}>{description}</div>
		</div>
	);
};
