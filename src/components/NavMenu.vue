<template>

    <div class="navbar">
        <div class="container">
            <div class="navbar-content">
                <ul class="navbar-list">
                    <li v-for="nav in navs" class="navbar-item">
                        <router-link :to="nav.path" class="navbar-link">{{nav.title}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>

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