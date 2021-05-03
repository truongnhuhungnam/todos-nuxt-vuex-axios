<template>
    <div class="Todos mt-4">
        <TodoForm />
        <b-list-group class="mt-4">
            <b-list-group-item v-for="todo in todos" :key="todo.id">
                <p class="mb-1">
                    <span class="text-primary">ID:</span> {{ todo.id }}
                </p>
                <p class="mb-1">
                    <span class="text-primary">User ID:</span> {{ todo.userId }}
                </p>
                <p class="mb-1">
                    <span class="text-primary">Title:</span> {{ todo.title }}
                </p>
                <p class="mb-1">
                    <span class="text-primary">Status:</span>
                    {{ todo.completed }}
                </p>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapState } from 'Vuex'
import TodoForm from './TodoForm.vue'
export default {
    name: 'Todos',
    components: { TodoForm },
    computed: {
        ...mapState({
            todos: (state) => state.todos.todos,
        }),
    },
    mounted() {
        this.$store.dispatch('todos/getTodos')
    },
}
</script>
