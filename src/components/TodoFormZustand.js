import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import useStore from "./useStore";

const TodoFormZustand = () => {
	const [value, setValue] = useState("");
	const addTodo = useStore(state => state.addTodo);

	const handleSubmit = e => {
		e.preventDefault();
		if (value) {
			addTodo(value);
		}
	};

	const handleChange = e => {
		setValue(e.target.value);
	};

	return (
		<Typography
			variant="h2"
			sx={{
				display: "flex",
				justifyContent: "center",
				marginTop: "10px",
				marginBottom: "20px",
			}}
		>
			<form className="form" onSubmit={handleSubmit}>
				<input
					type="text"
					value={value}
					onChange={handleChange}
					placeholder="Let's do it!"
					required
					style={{ border: "none", borderRadius: "3px", zIndex: "2", fontWeight: "bold" }}
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
	);
};

export default TodoFormZustand;
