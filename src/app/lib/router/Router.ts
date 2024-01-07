import { Route } from "./Route";

export class Router {
    routes: Route[];

    constructor(routes: any[]) {
        this.routes = routes;
        this.init();
    }
    
    init(){
        window.addEventListener('load', () => {
            this.loadRoute();
        })

        window.addEventListener('popstate', () => {
            this.loadRoute();
        });
    }

    async loadRoute() {
        const route = this.routes.find(r => r.path === location.pathname);
        document.querySelector('#app').innerHTML = await route.page.render();
    }
}