import { createApp } from "vue";
import App from './App.vue'
import router from './router'
import { registerMicroApps } from 'qiankun';

createApp(App)
    .use(router)
    .mount('#app');

const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);

registerMicroApps([
    {
        name: 'app1',
        entry: 'http://localhost:30001',
        container: '#appContainer',
        activeRule: '/app1'
    },
    {
        name: 'app2',
        entry: 'http://localhost:30002',
        container: '#appContainer',
        // activeRule: getActiveRule('#/app2')
        activeRule: '/app2'
    }
]);
