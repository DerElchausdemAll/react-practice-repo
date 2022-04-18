import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const StyledContainer = styled(Container)`
	margin: 0;
	display: flex;
	justify-content: center;
	/* border-radius: 10px; */
	background: black;
	color: white;
`;
export const StyledBox = styled(Box)`
	flex-direction: column;
	justify-content: center;
	background: linear-gradient(to left, #3f51b5, #9c27b0);

	border-radius: 5px;
	margin-top: 30px;
	width: 80vw;
`;

export const StyledTodosBox = styled(Box)`
	background: linear-gradient(to right, #3f51b5, #2196f3);
	margin: 15px;
	display: flex;
	justify-content: space-between;
	border-radius: 8px;
`;

export const StyledTodos = styled.div`
	display: flex;
	align-items: center;
`;

export const StyledIcons = styled.div`
	display: flex;
	align-items: center;
	margin: 5px;
`;

export const StyledEditInput = styled.input`
	border: none;
	border-radius: 3px;
	font-weight: bold;
	margin-left: 20px;
`;
