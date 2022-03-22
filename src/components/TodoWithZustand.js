import TodoFormZustand from "./TodoFormZustand";
import TodosListZustand from "./TodosListZustand";
import DarkModeZustand from "./DarkModeZustand";

import { StyledContainer, StyledBox } from "./styled";
import Typography from "@mui/material/Typography";

const TodoWithZustand = () => {
	return (
		<StyledContainer>
			<StyledBox>
				<Typography variant="h6" sx={{ display: "flex", justifyContent: "center" }}>
					Hey, what's to do?
				</Typography>
				<TodoFormZustand />
				<TodosListZustand />
				{/* <DarkModeZustand /> */}
			</StyledBox>
		</StyledContainer>
	);
};

export default TodoWithZustand;
