<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="light">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

            <b-navbar-brand>TODOS</b-navbar-brand>

            <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>
