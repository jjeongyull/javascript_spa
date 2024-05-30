import Router from './Router.js';
import Components from './core/Components.js';
import createPages from './pages/index.js';

export default class App extends Components {
  template() {
    return `
    <main></main>
    `;
  }
  mounted() { // Dom이 생성되고 난 후
    const $main = this.$target.querySelector('main');
    const pages = createPages($main);

    const router = new Router($main);
    router.addRoute('#/', pages.home);
    router.addRoute('#/about', pages.About);
    router.start();
  }
}