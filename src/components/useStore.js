import create from "zustand";
import produce from "immer";
import { persist } from "zustand/middleware";

const useStore = create(
	persist(set => {
		return {
			todos: [{ name: "" }],
			addTodo: value => {
				set(
					produce(state => {
						state.todos.push({ name: value });
					})
				);
			},
			deleteTodo: index => {
				set(
					produce(state => {
						state.todos.splice(index, 1);
					})
				);
			},
			checkTodo: index => {
				set(
					produce(state => {
						state.todos[index].isChecked = !state.todos[index].isChecked;
					})
				);
			},
			editTodo: index => {
				set(
					produce(state => {
						state.todos[index].edit = true;
						state.todos[index].editValue = state.todos[index].name;
					})
				);
			},
			setEditValue: (value, index) => {
				set(
					produce(state => {
						state.todos[index].editValue = value;
					})
				);
			},
			saveEditTodo: index => {
				set(
					produce(state => {
						state.todos[index].name = state.todos[index].editValue;
						state.todos[index].edit = false;
					})
				);
			},
			toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
		};
	})
);

export default useStore;
