import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { shadows } from "@mui/system";

const TodoForm = props => {
	const [input, setInput] = useState("");

	const handleChange = e => {
		setInput(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput("");
	};

	return (
		<Box
			sx={{
				background: "#9c27b0",
				border: "6px solid #9c27b0",
				borderRadius: "5px",
				margin: "10px",
			}}
		>
			<Typography variant="h2">
				<form onSubmit={handleSubmit} style={{ display: "flex" }}>
					<input
						type="text"
						placeholder="Let's do it!"
						value={input}
						name="text"
						onChange={handleChange}
						required
						style={{ border: "none", borderRadius: "3px", zIndex: "2" }}
					/>
					<button type="submit" style={{ border: "none", background: "#9c27b0" }}>
						<div
							style={{
								borderRadius: "50%",
								background: "#FA79B1",
								marginLeft: "9px",
							}}
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
						</div>
					</button>
				</form>
			</Typography>
		</Box>
	);
};

export default TodoForm;
