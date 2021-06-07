import './public-path';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";


let _router = null;
let _instance = null;

function render(props = {}) {
    const { container } = props;

    _router = router;

    _instance = createApp(App)
        .use(_router)
    _instance.mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {
    console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
    console.log('[vue] props from main framework', props);
    render(props);
}
export async function unmount() {
    console.log('instance:', _instance)
    _instance.unmount();
    _instance = null;
    _router = null;
}
