export default {
    SET_TODOS(state, todos) {
        state.todos = todos
    },

    ADD_TODO(state, newTodo) {
        state.todos.unshift(newTodo)
    },

    DELETE_TODO(state, todoId) {
        state.todos = state.todos.filter((todo) => todo.id !== todoId)
    },
}
