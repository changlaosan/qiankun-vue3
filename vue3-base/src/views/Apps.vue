<template>
    <div id="appContainer"></div>
</template>

<script>
import { start } from 'qiankun';

export default {
    mounted() {
        if (!window.qiankunStarted) {
            window.qiankunStarted = true;
            start({//乾坤配置  https://qiankun.umijs.org/zh/api
                sandbox: { strictStyleIsolation: true } //开启shadow dom沙箱隔离
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
