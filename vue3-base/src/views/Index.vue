<template>
    <div>
        <header>
            <router-link to="/home">home</router-link>
            <router-link to="/about">about</router-link>
            <router-link to="/app1/">app1-history</router-link>
            <router-link to="/app2/">app2-hash</router-link>
        </header>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
a {
    padding: 0 20px;
}
</style>
