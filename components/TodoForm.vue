<template>
    <b-form inline @submit="onSubmit">
        <b-form-input
            id="inline-form-input-name"
            v-model="title"
            class="mr-2"
            placeholder="Please enter a name of todo"
            required
        ></b-form-input>

        <b-button variant="primary" type="submit" squared>
            Add a todo
        </b-button>
    </b-form>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
    name: 'TodoForm',

    data() {
        return {
            title: '',
        }
    },

    methods: {
        ...mapActions({
            addTodos: 'todos/addTodos',
        }),
        onSubmit(event) {
            event.preventDefault()
            this.addTodos({
                userId: uuidv4(),
                id: uuidv4(),
                title: this.title,
                completed: false,
            })
        },
    },
}
</script>

<style scoped>
.form-inline .form-control {
    width: 20em;
}
</style>
