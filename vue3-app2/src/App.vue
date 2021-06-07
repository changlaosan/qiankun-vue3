<template>
    <div id="app">
        <div id="nav">
            <button @click="$router.push('/')">home</button>
            <button @click="$router.push('/about')">about</button>
        </div>
        <router-view />
    </div>
</template>
