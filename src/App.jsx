import React from "react";
import TodoWithZustand from "./components/TodoWithZustand";
// import TodoList from "./components/TodoList"; Version Alpha without Zustand

const App = () => {
	return (
		<div>
			{/* <TodoList />  Version Alpha without Zustand*/}
			<TodoWithZustand />
		</div>
	);
};

export default App;
