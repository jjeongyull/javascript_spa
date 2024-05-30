import Components from './core/Components.js';

export default class Router extends Components {
  setup() {
    this.$state = {
      routes: [],
    };
  }

  addRoute(fragment, component) {
    this.$state.routes.push({ fragment, component });
  }

  checkRoutes() {
    const currentRoute = this.$state.routes.find((route) => {
      return route.fragment === window.location.hash;
    });

    if (!currentRoute) {
      window.location.href = './#';
      this.$state.routes[0].component();
      return;
    }

    currentRoute.component();
  }

  start() {
    window.addEventListener('hashchange', () => this.checkRoutes());

    if (!window.location.hash) {
      window.location.hash = '#/';
    }

    this.checkRoutes();
  }
}