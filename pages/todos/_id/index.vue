<template>
    <div>
        <b-list-group class="mt-4">
            <b-list-group-item>User Id: {{ todo.userId }}</b-list-group-item>
            <b-list-group-item>Id: {{ todo.id }}</b-list-group-item>
            <b-list-group-item>Title: {{ todo.title }}</b-list-group-item>
            <b-list-group-item>
                Completed Status: {{ todo.completed }}
            </b-list-group-item>
        </b-list-group>
        <b-button to="/" squared variant="outline-info" class="mt-4">
            Back to todos list
        </b-button>
    </div>
</template>

<script>
import { mapState } from 'Vuex'
export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    computed: {
        ...mapState({
            todo: (state) => state.todos.todos,
        }),
    },
    mounted() {
        this.$store.dispatch('todos/getATodo', this.$route.params.id)
    },
}
</script>
