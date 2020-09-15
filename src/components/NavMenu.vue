<template>
    <nav class="navbar">
        <ul class="navbar-content">
            <li v-for="nav in navs" class="navbar-item">
                <router-link :to="nav.path" class="navbar-link">{{nav.title}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu",

        props: {
            navs: {
                required:true,
                type: Array
            }
        }
    }
</script>

<style scoped>

</style>