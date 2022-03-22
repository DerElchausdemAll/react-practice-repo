import React from "react";
import useStore from "./useStore";

import { StyledTodosBox, StyledTodos, StyledIcons, StyledEditInput } from "./styled";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const TodosListZustand = () => {
	const todos = useStore(state => state.todos);
	const deleteTodo = useStore(state => state.deleteTodo);
	const checkTodo = useStore(state => state.checkTodo);
	const editTodo = useStore(state => state.editTodo);
	const setEditValue = useStore(state => state.setEditValue);
	const saveEditTodo = useStore(state => state.saveEditTodo);

	return (
		<div>
			{todos.map((todo, index) => {
				return (
					<StyledTodosBox key={index}>
						<StyledTodos>
							{todo.edit ? (
								<StyledEditInput
									type="text"
									value={todo.editValue}
									onChange={e => {
										setEditValue(e.target.value, index);
									}}
								/>
							) : (
								<span style={{ marginLeft: "20px", fontWeight: "bold" }}>
									{todo.name}
								</span>
							)}
						</StyledTodos>
						<StyledIcons>
							<div
								onClick={() => {
									if (todo.edit) {
										saveEditTodo(index);
									} else {
										editTodo(index);
									}
								}}
							>
								{todo.edit ? <CheckIcon /> : <EditIcon />}
								<DeleteIcon
									onClick={() => {
										deleteTodo(index);
									}}
								/>
							</div>
						</StyledIcons>
					</StyledTodosBox>
				);
			})}
		</div>
	);
};

export default TodosListZustand;

{
	/* <StyledTodosBox key={index}>
	<StyledTodos>
		<input
			type="checkbox"
			checked={todo.isChecked ? todo.isChecked : false}
			onChange={() => {
				checkTodo(index);
			}}
		/>

		{todo.edit ? (
			<StyledEditInput
				type="text"
				value={todo.editValue}
				onChange={e => {
					setEditValue(e.target.value, index);
				}}
			/>
		) : (
			<span
				style={
					todo.isChecked
						? { textDecoration: "line-through", fontWeight: "bold" }
						: { textDecoration: "none", fontWeight: "bold" }
				}
			>
				{todo.name}
			</span>
		)}
	</StyledTodos>
	<StyledIcons>
		<div
			onClick={() => {
				if (todo.edit) {
					saveEditTodo(index);
				} else {
					editTodo(index);
				}
			}}
		>
			{todo.edit ? <CheckIcon /> : <EditIcon />}
			<DeleteIcon
				onClick={() => {
					deleteTodo(index);
				}}
			/>
		</div>
	</StyledIcons>
</StyledTodosBox>; */
}
