export function appReducer(state, action) {
	switch (action.type) {
		case "delete":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
			};
		case "finish":
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id !== action.id) {
						return todo;
					}

					return {
						...todo,
						done: true,
					};
				}),
			};
		case "add":
			const newId =
				state.todos.length > 0
					? Math.max(...state.todos.map((todo) => todo.id)) + 1
					: 0;
			return {
				isFormShown: false,
				todos: [
					...state.todos,
					{
						name: action.newTodoName,
						done: false,
						id: newId,
					},
				],
			};
		case "open_form":
			return {
				...state,
				isFormShown: true,
			};
		default:
			throw new Error("Action not supported");
	}
}
