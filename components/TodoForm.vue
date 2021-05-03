<template>
    <b-form inline>
        <b-form-input
            id="inline-form-input-name"
            class="mr-2"
            placeholder="Please enter a name of todo"
        ></b-form-input>

        <b-button variant="primary">Add a todo</b-button>
    </b-form>
</template>

<script>
export default {
    name: 'TodoForm',
}
</script>

<style scoped>
.form-inline .form-control {
    width: 20em;
}
</style>
