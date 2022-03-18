import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import Container from "@mui/material/Container";

// const useLocalStorage = (id, initialValue) => {
// 	const [value, setValue] = useState(JSON.parse(window.localStorage.getItem(id)) ?? initialValue);

// 	useEffect(() => {
// 		window.localStorage.setItem(id, JSON.stringify(value));
// 	}, [id, value]);
// 	return [value, setValue];
// };

const TodoList = () => {
	// const [todos, setTodos] = useLocalStorage([]);

	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		const newTodos = [todo, ...todos];
		setTodos(newTodos);
		console.log(todo, ...todos);
	};

	const updateTodo = (todoId, newValue) => {
		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
	};

	const removeTodo = id => {
		const removeArr = [...todos].filter(todo => todo.id !== id);

		setTodos(removeArr);
	};

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<Container
			sx={{
				display: "flex",
				justifyContent: "center",
				borderRadius: "10px",
				bgcolor: "#042940",
				color: "white",
			}}
		>
			<div>
				<h1>Hey, what's to do?</h1>
				<TodoForm onSubmit={addTodo} />

				<Todo
					todos={todos}
					completeTodo={completeTodo}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
				/>
			</div>
		</Container>
	);
};

export default TodoList;
