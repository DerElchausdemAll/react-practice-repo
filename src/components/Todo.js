import React, { useState } from "react";
import TodoForm from "./TodoForm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = value => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} placeholder="Test" />;
	}

	return todos.map((todo, index) => (
		<Box
			sx={{
				backgroundColor: "primary.light",
				marginBottom: "10px",
				display: "flex",
				justifyContent: "space-between",
				borderRadius: "8px",
				// color: "black",
				// background: "white",
			}}
			className={todo.isComplete ? "todo-row complete" : "todo-row"}
			key={index}
		>
			<Typography
				variant="h5"
				style={{ padding: "10px" }}
				key={todo.id}
				onClick={() => completeTodo(todo.id)}
			>
				{todo.text}
			</Typography>
			<div style={{ display: "flex", alignItems: "center" }}>
				<EditIcon onClick={() => setEdit({ id: todo.id, value: todo.text })}>Edit</EditIcon>
				<DeleteIcon onClick={() => removeTodo(todo.id)}>Delete</DeleteIcon>
			</div>
		</Box>
	));
};

export default Todo;
