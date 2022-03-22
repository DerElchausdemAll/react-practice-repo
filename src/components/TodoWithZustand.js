import { useState, useEffect } from "react";
import useStore from "./useStore";
import "../style.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const TodoWithZustand = () => {
	const [value, setValue] = useState("");
	const todos = useStore(state => state.todos);
	const addTodo = useStore(state => state.addTodo);
	const deleteTodo = useStore(state => state.deleteTodo);
	const checkTodo = useStore(state => state.checkTodo);
	const editTodo = useStore(state => state.editTodo);
	const setEditValue = useStore(state => state.setEditValue);
	const saveEditTodo = useStore(state => state.saveEditTodo);

	const toggleDarkMode = useStore(state => state.toggleDarkMode);
	const darkMode = useStore(state => state.darkMode);

	useEffect(() => {
		if (darkMode) {
			document.querySelector("body").classList.add("dark");
		} else {
			document.querySelector("body").classList.remove("dark");
		}
	}, [darkMode]);

	const handleSubmit = e => {
		e.preventDefault();
		if (value) {
			addTodo(value);
		}
	};

	const handleChange = e => {
		setValue(e.target.value);
	};

	const handleDelete = index => {
		deleteTodo(index);
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
			<Box
				sx={{
					flexDirection: "column",
					justifyContent: "center",
					background: "#9c27b0",
					border: "6px solid #9c27b0",
					borderRadius: "5px",
					margin: "10px",
					width: "33vw",
				}}
			>
				<Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }}>
					Hey, what's to do?
				</Typography>
				<Typography variant="h2" sx={{ display: "flex", justifyContent: "center" }}>
					<form className="form" onSubmit={handleSubmit}>
						<input
							type="text"
							value={value}
							onChange={handleChange}
							placeholder="Let's do it!"
							required
							style={{ border: "none", borderRadius: "3px", zIndex: "2" }}
						/>
						<button
							type="submit"
							style={{ border: "none", background: "#9c27b0", color: "white" }}
						>
							<AddIcon
								fontSize="large"
								sx={{
									color: "white",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							/>
						</button>
					</form>
				</Typography>
				<div className="todos">
					{todos.map((todo, index) => {
						return (
							<Box
								key={index}
								sx={{
									backgroundColor: "primary.light",
									margin: "15px",
									display: "flex",
									justifyContent: "space-between",
									borderRadius: "8px",
								}}
							>
								<div style={{ display: "flex", alignItems: "center" }}>
									<input
										type="checkbox"
										checked={todo.isChecked ? todo.isChecked : false}
										onChange={() => {
											checkTodo(index);
										}}
									/>

									{todo.edit ? (
										<input
											type="text"
											value={todo.editValue}
											style={{
												border: "none",
												borderRadius: "3px",
											}}
											onChange={e => {
												setEditValue(e.target.value, index);
											}}
										/>
									) : (
										<span
											style={
												todo.isChecked
													? { textDecoration: "line-through" }
													: { textDecoration: "none" }
											}
										>
											{todo.name}
										</span>
									)}
								</div>
								<div
									style={{ display: "flex", alignItems: "center", margin: "5px" }}
								>
									<EditIcon
										onClick={() => {
											if (todo.edit) {
												saveEditTodo(index);
											} else {
												editTodo(index);
											}
										}}
									>
										{todo.edit ? "Save" : "Edit"}
									</EditIcon>
									<DeleteIcon onClick={handleDelete}>Delete</DeleteIcon>
								</div>
							</Box>
						);
					})}
				</div>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button variant="contained" onClick={toggleDarkMode}>
						{!darkMode ? "Dark Mode" : "Normal Mode"}
					</Button>
				</Box>
			</Box>
		</Container>
	);
};

export default TodoWithZustand;
