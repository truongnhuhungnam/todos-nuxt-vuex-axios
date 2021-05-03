<template>
    <div class="Todos mt-4">
        <TodoForm />
        <b-list-group class="mt-4">
            <b-list-group-item
                v-for="todo in todos"
                :key="todo.id"
                class="d-flex justify-content-between"
            >
                <div class="info">
                    <p class="mb-1">
                        <span class="text-primary">ID:</span> {{ todo.id }}
                    </p>
                    <p class="mb-1">
                        <span class="text-primary">User ID:</span>
                        {{ todo.userId }}
                    </p>
                    <p class="mb-1">
                        <span class="text-primary">Title:</span>
                        {{ todo.title }}
                    </p>
                    <p class="mb-1">
                        <span class="text-primary">Status:</span>
                        {{ todo.completed }}
                    </p>
                </div>
                <div class="buttonGroup d-flex flex-column">
                    <b-button squared variant="outline-success" class="mb-2">
                        Update
                    </b-button>
                    <b-button
                        squared
                        variant="outline-danger"
                        @click="deleteTodo(todo.id)"
                    >
                        Delete
                    </b-button>
                </div>
            </b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
import { mapState, mapActions } from 'Vuex'
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

    methods: {
        ...mapActions({
            deleteTodo: 'todos/deleteTodo',
        }),
    },
}
</script>
