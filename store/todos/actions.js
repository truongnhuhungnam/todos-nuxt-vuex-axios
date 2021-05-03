export default {
    async getTodos({ commit }) {
        const todos = await this.$axios.$get('/todos?_limit=5')
        commit('SET_TODOS', todos)
    },
}
